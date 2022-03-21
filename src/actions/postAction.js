import * as api from '../api'
import {FETCH_ALL,CREATE_POST,UPDATE_POST, DELETE_POST} from '../constant/actionTypes';

//Action Creator
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPost();
    // const updatedData = []
    // const response = data.map(res => api.fetchUser(res.userId))
    // Promise.all(response).then((updatedData)=> {
    //   console.log(updatedData)
    // })

    dispatch({
      type: FETCH_ALL,
      payload: data,
    });

  } catch(err) {
    console.error(err.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);

    dispatch({
      type: CREATE_POST,
      payload: data
    });
  } catch(err) {
    console.error(err.message);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const {data} = await api.updatePost(id, post);
    console.log(data)
    dispatch({
      type: UPDATE_POST,
      payload: data
    });
  } catch(err){
    console.error(err.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try{
    await api.deletePost(id);
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  } catch(err){
    console.error(err.message);
  }
}
