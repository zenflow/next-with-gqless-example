const {useRouter} = require('next/router')

const redirectTo = '/gqless/ssr'

const HomePage = () => {
  const router = useRouter()
  router.push({pathname: redirectTo})
  return (<></>)
}

HomePage.getInitialProps = ({res}) => {
  if (res) {
    res.writeHead(301,{Location: redirectTo})
    res.end()
    console.log('redirected')
  }
}

export default HomePage
