import { graphql } from '@gqless/react'
import { useGqless } from '../../lib/gqless'

const UPDATE_POST_MUTATION = `
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      __typename
      id
      votes
    }
  }
`

function PostUpvoter ({post}) {
  const {client} = useGqless()

  const upvotePost = () => {
    // make optimistic update:
    post.votes++
    // send mutation to server:
    client.fetchQuery(UPDATE_POST_MUTATION, {id: post.id, votes: post.votes})
    // TODO: Should handle result from above, but Apollo example doesn't either so, meh
  }

  return (
    <button onClick={() => upvotePost()}>
      {post.votes}
      <style jsx>{`
        button {
          background-color: transparent;
          border: 1px solid #e4e4e4;
          color: #000;
        }
        button:active {
          background-color: transparent;
        }
        button:before {
          align-self: center;
          border-color: transparent transparent #000000 transparent;
          border-style: solid;
          border-width: 0 4px 6px 4px;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </button>
  )
}

export default graphql(PostUpvoter)
