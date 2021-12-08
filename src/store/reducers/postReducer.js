import { GET_POSTS } from "../types/posts"

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        default:
            return state
    }
}