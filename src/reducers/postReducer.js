import {FETCH_ALL,CREATE_POST,UPDATE_POST, DELETE_POST} from '../constant/actionTypes'

const postReducer = (posts = [], action) => {
  switch (action.type){
    case FETCH_ALL:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map((post) => post.id === action.payload.id ? action.payload : post);
    case DELETE_POST:
      return posts.filter((post) => post.id !== action.payload);
    default:
      return posts;
  }
}

export default postReducer;
