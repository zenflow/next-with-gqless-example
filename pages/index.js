import App from '../components/App'
import Header from '../components/Header'
import InfoBox from '../components/InfoBox'
import ReactMarkdown from 'react-markdown'
import rawReadme from '../README.md'

const readme = rawReadme
  .split(/\r?\n/g)
  .slice(1) // remove heading on first line
  .filter(line => !line.includes('Live demo')) // remove line with "Live demo" link
  .join('\n')

const HomePage = () => {
  return (
    <App>
      <Header />
      <InfoBox>
        <ReactMarkdown source={readme} linkTarget="_blank"/>
      </InfoBox>
      <style jsx global>{`
        code {
          background-color: #EEE;
          padding: 2px;
        }
      `}</style>
    </App>
  )
}

export default HomePage
