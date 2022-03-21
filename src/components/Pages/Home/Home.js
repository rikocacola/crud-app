import React, {useState} from 'react'

import Posts from '../../Posts/Posts'
import FormPost from '../../FormPost/FormPost'

import styles from './Home.module.scss'

const Home = () => {
  const [currentId, setCurrentId] = useState(null)
  return (
    <div className={styles['home-wrap']}>
      <div className={styles['form-post']}>
        <FormPost currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
      <div className={styles['posts']}>
        <Posts setCurrentId={setCurrentId}/>
      </div>
    </div>
  )
}

export default Home
