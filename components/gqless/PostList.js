import { useState } from 'react'
import { graphql, useVariable } from '@gqless/react'
import { useGqless } from '../../lib/gqless'
import PostUpvoter from '../gqless/PostUpvoter'

const flat = input => [].concat(...input)
const flatMap = (array, callback) => flat(array.map(callback))

export const getAllPostsArgs = pageNumber => ({
  skip: pageNumber * 10,
  first: 10,
  orderBy: 'createdAt_DESC'
})

const PostList = () => {
  const {query} = useGqless()
  const [numberOfPages, setNumberOfPages] = useState(1)
  const loadAnotherPage = () => setNumberOfPages(n => n + 1)
  const posts = flatMap(
    Array.from({length: numberOfPages}),
    (_, index) => query.allPosts(getAllPostsArgs(index))
  )
  const areMorePosts = posts.length < query._allPostsMeta.count
  return (
    <section>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
              <PostUpvoter post={post}/>
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts && (
        <button onClick={() => loadAnotherPage()}>
          {'Show More'}
        </button>
      )}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
};
export default graphql(PostList)
