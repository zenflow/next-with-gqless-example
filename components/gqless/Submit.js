import { getAccessor } from 'gqless'
import { useGqless } from '../../lib/gqless'
import { getAllPostsArgs } from './PostList'

const CREATE_POST_MUTATION = `
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`

export default function Submit () {
  const {client} = useGqless()

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const title = formData.get('title')
    const url = formData.get('url')
    form.reset()

    // send mutation to server and get the newly created Post object as `createPost`:
    const {data: {createPost}} = await client.fetchQuery(CREATE_POST_MUTATION, {title, url})

    { // update cache with `createPost`:
      const getPageKey = pageNumber => {
        const posts = client.query.allPosts(getAllPostsArgs(pageNumber))
        const path = getAccessor(posts).path.toString()
        return path.replace(/^Query\./, '')
      }

      const rootJson = client.cache.rootValue.toJSON()

      let rootJsonUpdates = {}
      let nextPostToPrepend = createPost
      for (let pageNumber = 0; true; pageNumber++) {
        const pageKey = getPageKey(pageNumber)
        if (!rootJson[pageKey]) {
          break;
        }
        const toPrepend = nextPostToPrepend
        nextPostToPrepend = rootJson[pageKey].slice(-1)[0]
        rootJsonUpdates[pageKey] = [toPrepend, ...rootJson[pageKey].slice(0, -1)]
      }

      client.cache.merge(client.accessor, rootJsonUpdates)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit</h1>
      <input placeholder="title" name="title" type="text" required/>
      <input placeholder="url" name="url" type="url" required/>
      <button type="submit" disabled={false}>
        Submit
      </button>
      <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
    </form>
  )
}
