import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import ssrPrepass from 'react-ssr-prepass'
import { client, createClient } from '../gqless'

/**
 * React hook to access the gqless client from context.
 * It's necessary to use this in order for SSR to work properly,
 * because on the server, every request should get it's own gqless client.
 * @returns {{client, query}}
 */
export const useGqless = () => {
  const client = React.useContext(GqlessContext)
  const {query} = client
  return {client, query}
}
export const GqlessContext = React.createContext(client);

// On the client, we store the client in the following variable.
// This prevents the client from reinitializing between page transitions.
let globalClient = null

/**
 * Always creates a new client on the server
 * Creates or reuses client in the browser.
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */
const getClient = (initialState) => {
  const withInitialState = client => {
    client.cache.merge(client.accessor, initialState)
    return client
  }

  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return withInitialState(createClient())
  }


  // Reuse client on the client-side
  if (!globalClient) {
    globalClient = withInitialState(client)
  }
  return globalClient
}

/**
 * Creates a withGqless HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withGqlessOptions
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */
export const withGqless = ({} = {}) => PageComponent => {
  const WithGqless = ({gqlessClient, gqlessState, ...pageProps}) => {
    const client = gqlessClient || getClient(gqlessState)
    return (
      <GqlessContext.Provider value={client}>
        <PageComponent {...pageProps} />
      </GqlessContext.Provider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component'
    WithGqless.displayName = `withGqless(${displayName})`
  }

  WithGqless.getInitialProps = async ctx => {
    // Get the client to use
    const gqlessClient = getClient({})

    // Install the client on NextPageContext
    const inAppContext = Boolean(ctx.ctx)
    ctx.gqlessClient = gqlessClient
    if (inAppContext) {
      ctx.ctx.gqlessClient = gqlessClient
    }

    // Run wrapped getInitialProps methods
    let pageProps = {}
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx)
    } else if (inAppContext) {
      pageProps = await App.getInitialProps(ctx)
    }

    // When redirecting, the response is finished.
    // No point in continuing to render
    if (ctx.res && ctx.res.finished) {
      return pageProps
    }

    // Prefetch & serialize data if on the server
    if (!process.browser) {
      const {AppTree} = ctx

      // Since AppComponents and PageComponents have different context types
      // we need to modify their props a little.
      let props
      if (inAppContext) {
        props = { ...pageProps, gqlessClient }
      } else {
        props = { pageProps: { ...pageProps, gqlessClient } }
      }

      const tree = <AppTree {...props}/>
      try {
        await ssrPrepass(tree)
      } catch (error) {
        // Prevent errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        console.error('Error while running `ssrPrepass`', error)
      }

      // ssrPrepass does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()

      // Dispose of client after rendering is done
      setTimeout(() => gqlessClient.dispose(), 1000)

      // We send gqlessClient as a prop to the component to avoid calling getClient() twice on the server,
      //   which would create and use two different clients, which would be bad.
      // The following code will make sure we send gqlessClient as `null` to the browser.
      gqlessClient.toJSON = () => null
      // We also send gqlessState as a prop to the component, so that when it renders on the browser,
      //   the gqless client can be initialized with the required data.
      const gqlessState = gqlessClient.cache.rootValue.toJSON()
      return {...pageProps, gqlessState, gqlessClient}
    }

    return pageProps
  }

  return WithGqless
}
