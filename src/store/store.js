import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { postReducer } from './reducers/postReducer'
import { authReducer } from './reducers/authReducer'

const rootReducer = combineReducers({
   allpost: postReducer,
   authReducer: authReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store