import { combineReducers } from 'redux';
import createPostReducer from './createPostReducer'
import authReducer from './authReducer'
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
    posts: createPostReducer,
    auth: authReducer,
    token: tokenReducer,
})

export default rootReducer;