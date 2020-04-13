import App from '../../components/App'
import InfoBox from '../../components/InfoBox'
import Header from '../../components/Header'
import Submit from '../../components/gqless/Submit'
import PostList from '../../components/gqless/PostList'
import { NoSsr } from '../../lib/NoSsr'
// Since <Suspense/> is used inside <NoSsr/>, it could be the normal <Suspense>,
//   but we just use SsrCompatibleSuspense everywhere.
import Suspense from '../../lib/SsrCompatibleSuspense'
import { withGqless } from '../../lib/gqless'

const ClientOnlyPage = props => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This example shows how to disable gqless's query fetching on the server.
      If you <a href="/client-only">reload</a> this page, you will see a loader
      since gqless didn't fetch any data on the server. This allows{' '}
      <a
        href="https://nextjs.org/blog/next-9#automatic-static-optimization"
        target="_blank"
        rel="noopener noreferrer"
      >
        automatic static optimization
      </a>
      .
    </InfoBox>
    <Submit/>
    <NoSsr>
      <Suspense fallback={<div>Loading</div>}>
        <PostList />
      </Suspense>
    </NoSsr>
  </App>
)

export default ClientOnlyPage
