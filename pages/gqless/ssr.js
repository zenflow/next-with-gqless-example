import App from '../../components/App'
import InfoBox from '../../components/InfoBox'
import Header from '../../components/Header'
import Submit from '../../components/gqless/Submit'
import PostList from '../../components/gqless/PostList'
import { withGqless } from '../../lib/gqless'
import Suspense from '../../lib/SsrCompatibleSuspense'

const IndexPage = () => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This example shows how to fetch all initial gqless queries on the
      server. If you <a href="/">reload</a> this page you won't see a loader
      since gqless fetched all needed data on the server. This prevents{' '}
      <a
        href="https://nextjs.org/blog/next-9#automatic-static-optimization"
        target="_blank"
        rel="noopener noreferrer"
      >
        automatic static optimization
      </a>{' '}
      in favour of full Server-Side-Rendering.
    </InfoBox>
    <Submit/>
    <Suspense fallback={<div>Loading</div>}>
      <PostList />
    </Suspense>
  </App>
)

export default withGqless()(IndexPage)
