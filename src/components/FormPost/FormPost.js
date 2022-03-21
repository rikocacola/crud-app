import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {createPost, updatePost} from '../../actions/postAction'

import styles from './FormPost.module.scss'

const FormPost = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    title: '', body: '', userId: 1, id: 0
  })
  const posts = useSelector((state) => state.posts)
  const currentPost = useSelector((state)=> currentId ? state.posts.find((post) => post.id === currentId) : null)

  useEffect(()=> {
    if(currentPost){
      setPostData(currentPost)
    }
  },[currentPost])

  const clear = () => {
    setPostData({
      title: '', body: '', id: 0
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentId){
      dispatch(updatePost(currentId, postData))
      setCurrentId(null)
    } else{
      dispatch(createPost(postData))
    }
    clear()
  }
  return (
    <div className={styles['form-post']}>
      <form onSubmit={handleSubmit} className={styles['form']}>
        {currentId ? 
        <input placeholder="Title" className={styles['input-title']} name="title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/> :
        <input placeholder="Title" className={styles['input-title']} name="title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value, id: (posts[posts.length -1 ]+1)})}/>
        }
        <input placeholder="Body" className={styles['input-body']} name="body" value={postData.body} onChange={(e) => setPostData({...postData, body: e.target.value})}/>
        <button type="submit">
          {
            currentId ? 'EDIT' : 'POST'
          }
        </button>
      </form>
    </div>
  )
}

export default FormPost
