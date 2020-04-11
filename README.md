# next-with-gqless-example
Example project with Next.js &amp; gqless (graphql client)

This app is an example of how to use [gqless](https://gqless.dev/) with [Next.js](https://nextjs.org/).
It mirrors [the with-apollo Next.js example app](https://github.com/zeit/next.js/tree/canary/examples/with-apollo).
Apollo examples are included here for comparison.

## [Live demo](https://next-with-gqless-example.now.sh/).

## TODO

- Describe here in README what exactly was done here to integrate Next.js + gqless

- issues in lib/
    - Make `withGqless` decorator work on Next.js `App` component
    - Call `client.dispose()` sometime?

- issues in react-ssr-prepass
    - *Logs* (not throws) error "Hooks can only be called inside the body of a function component"
        - See https://github.com/FormidableLabs/react-ssr-prepass/issues/19
    - Sometimes throws ReferenceError: setImmediate is not defined
- issues in ReactDOMServer (?)
    - we should not need my `SsrCompatibleSuspense = process.browser ? Suspense : props => props.children` hack
- issues in Next.js
    - AppTree is just the *first* AppTree from initial page rendering
- issues in gqless
    - export getClient function from `client.ts`
    - handle graphql errors in queryFetcher in `client.ts`
    - Incorrectly merges queries when accessing the same path more than twice:
        E.g.
        ```
        {
          _allPostsMeta {
            count
          }
          allPosts__2: allPosts(first: 10, orderBy: createdAt_DESC, skip: 0) {
            url
            title
            votes
          }
          allPosts(first: 10, orderBy: createdAt_DESC, skip: 10) {
            url
            title
            votes
          }
          allPosts(first: 10, orderBy: createdAt_DESC, skip: 20) {
            url
            title
            votes
          }
        }
        ```

    - support updating cache with newly created gql objects (currently need to first deserialize then transform then reserialize cache)
    - inject `loading` state prop! Allows us to access all the normal data and build the normal tree, but then if `loading` return something different.
        - wrapping component renders (without suspending) the wrapped component with `loading={true}`
        - For SSR, since no suspense, need another way to notify when done prefetching data.
    - `useVariable` hook doesn't seem to work
