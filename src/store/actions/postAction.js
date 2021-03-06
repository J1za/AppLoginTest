import { GET_POSTS } from "../types/posts";
import axios from 'axios'

export const fetchposts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
        type: GET_POSTS,
        payload: res.data
    })
}