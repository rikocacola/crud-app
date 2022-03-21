import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/postAction'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'

import styles from './App.module.scss'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles['app-wrap']}>
      <Navbar/>
      <div className={styles['page-wrap']}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
