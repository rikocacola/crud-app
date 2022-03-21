import React from 'react'
import { useDispatch } from 'react-redux'

import {deletePost} from '../../actions/postAction'

import styles from './Post.module.scss'

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deletePost(post.id))
  }
  return (
    <div className={styles['post-wrap']}>
      <div className={styles['title']}>{post.title}</div>
      <div className={styles['body']}>{post.body}</div>
      <button onClick={handleDelete} className={styles['delete']}>
        Delete
      </button>
      <button onClick={() => setCurrentId(post.id)} className={styles['edit']}>
        Edit
      </button>
    </div>
  )
}

export default Post
