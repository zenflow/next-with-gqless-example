import App from '../components/App'
import Header from '../components/Header'
import InfoBox from '../components/InfoBox'

const ExternalLink = (({href, children}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
))

const HomePage = () => {
  return (
    <App>
      <Header />
      <InfoBox>
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
      </InfoBox>
    </App>
  )
}

export default HomePage
