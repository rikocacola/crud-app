import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/posts`;
const userUrl = `https://jsonplaceholder.typicode.com/users`;

export const fetchPost = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post)
export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const fetchUser = (id) => axios.get(`${userUrl}/${id}`);
