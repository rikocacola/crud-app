import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Posts.module.scss'

import Post from '../Post/Post'

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts)
  
  return (
    <div className={styles['posts']}>
      {posts.sort((a,b)=> b.id - a.id).map(post => 
        <div key={post.id}>
          <Post post={post} setCurrentId={setCurrentId}/>
        </div>
      )}
    </div>
  )
}



export default Posts
