# next-with-gqless-example

Example project with Next.js &amp; gqless (graphql client)

This app is an example of how to use [gqless](https://gqless.dev/) with [Next.js](https://nextjs.org/).
It mirrors [the with-apollo Next.js example app](https://github.com/zeit/next.js/tree/canary/examples/with-apollo).
Apollo examples are included here for comparison.

## [Live demo](https://next-with-gqless-example.now.sh/).

## The Gist

1. Copy boilerplate code from [./lib/gqless.js](https://github.com/zenflow/next-with-gqless-example/blob/master/lib/gqless.js),
including `withGqless` & `useGqless`, into your project.
2. Use the `withGqless` HOC on the Next.js pages you want SSR'd. This will add a React context provider
for the gqless client and wrap `getInitialProps` to prefetch the necessary data before displaying the page.
3. Use the `useGqless` hook to access the gqless `client` (and `query`) from context (in components that will be SSR'd).
We cannot use the singleton `client` (or `query`) exported from `Client.ts` for SSR because on the server we want to have one
client per request.
4. Use [`SsrCompatibleSuspense`](https://github.com/zenflow/next-with-gqless-example/blob/master/lib/SsrCompatibleSuspense.js)
instead of the regular React `Suspense` component.
This will stop ReactDOMServer from complaining and crashing when `<Suspense/>` is encountered during SSR.
The caveat here is that React will log warnings when rehydrating browser-side, since what's rendered on browser is
supposed to match what was rendered on the server. (Wondering about a better solution here...)
