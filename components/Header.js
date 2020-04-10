import Link from 'next/link'
import { withRouter } from 'next/router'

const examples = [
  {pathname: '/gqless/ssr', label: 'gqless SSR'},
  {pathname: '/gqless/client-only', label: 'gqless Client-only'},
  {pathname: '/apollo/ssr', label: 'Apollo SSR'},
  {pathname: '/apollo/client-only', label: 'Apollo Client-only'},
]

const ExternalLink = (({href, children}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
))

const Header = ({router}) => (
  <header>
    <h1>next-with-gqless-example</h1>
    <p>
      ℹ️ This app is an example of how to use {''}
      <ExternalLink href="https://gqless.dev/">
        gqless
      </ExternalLink>
      {' with '}
      <ExternalLink href="https://nextjs.org/">
        Next.js
      </ExternalLink>.
      It mirrors {''}
      <ExternalLink href="https://github.com/zeit/next.js/tree/canary/examples/with-apollo">
        the with-apollo Next.js example app
      </ExternalLink>.
      Apollo examples are included here for comparison.
    </p>
    <h3>Examples:</h3>
    <ol>
    {examples.map(({pathname, label}, index) => (
      <li key={index} className={pathname === router.pathname ? 'is-active' : ''}>
        <Link href={pathname}>
          <a>{label}</a>
        </Link>
      </li>
    ))}
    </ol>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      h3, ol, li {
        display: inline;
      }
      ol {
        padding: 0;
      }
      li {
        margin: 10px;
      }
      li a {
        padding: 4px;
      }
      li.is-active a {
        background: #eef;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
