import { combineReducers } from 'redux';
import createPostReducer from './createPostReducer'

const rootReducer = combineReducers({
    posts: createPostReducer,
})

export default rootReducer;