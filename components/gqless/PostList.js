import { useState } from 'react'
import { graphql, useVariable } from '@gqless/react'
import { useGqless } from '../../lib/gqless'
import PostUpvoter from '../gqless/PostUpvoter'
import Suspense from '../../lib/SsrCompatibleSuspense'

export const getAllPostsArgs = pageNumber => ({
  skip: pageNumber * 10,
  first: 10,
  orderBy: 'createdAt_DESC'
})

const PostList = () => {
  const {query} = useGqless()
  const [numberOfPages, setNumberOfPages] = useState(1)
  const loadAnotherPage = () => setNumberOfPages(n => n + 1)
  const postPages = Array.from({length: numberOfPages})
    .map((_, index) => query.allPosts(getAllPostsArgs(index)))
  const numberOfVisiblePosts = postPages.reduce((subtotal, posts) => subtotal + posts.length, 0)
  const totalNumberOfPosts = query._allPostsMeta.count
  const areMorePosts = numberOfVisiblePosts < totalNumberOfPosts
  return (
    <section>
      <ul>
        {postPages.map((posts, pageNumber) => (
          <Suspense key={pageNumber} fallback={<div>Loading more...</div>}>
            <PostPage pageNumber={pageNumber} posts={posts}/>
          </Suspense>
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

const PostPage = graphql(({pageNumber, posts}) => {
  return (<>
    {posts.map((post, index) => (
      <li key={index}>
        <div>
          <span>{(pageNumber * 10) + index + 1}. </span>
          <a href={post.url}>{post.title}</a>
          <PostUpvoter post={post}/>
        </div>
      </li>
    ))}
    <style jsx>{`
      li {
        display: block;
        margin-bottom: 10px;
      }
      div {
        align-items: center;
        display: flex;
      }
      span {
        font-size: 14px;
        margin-right: 5px;
      }
      a {
        font-size: 14px;
        margin-right: 10px;
        text-decoration: none;
        padding-bottom: 0;
        border: 0;
      }
    `}</style>
  </>)
})

export default graphql(PostList)
