import Link from 'next/link'
import { withRouter } from 'next/router'

const pages = [
  {pathname: '/', label: 'Home'},
  {pathname: '/gqless/ssr', label: 'gqless SSR'},
  {pathname: '/gqless/client-only', label: 'gqless Client-only'},
  {pathname: '/apollo/ssr', label: 'Apollo SSR'},
  {pathname: '/apollo/client-only', label: 'Apollo Client-only'},
]

const Header = ({router}) => (
  <header>
    <h1>next-with-gqless-example</h1>
    <ol>
    {pages.map(({pathname, label}, index) => (
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
      ol, li {
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
        background: #eef;
      }
      li.is-active a {
        background: #bdf;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
