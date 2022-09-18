import { combineReducers } from 'redux';
import auth from './authReducer'
import listPost from './postReducer';
const rootReducer = combineReducers({
    auth,
    listPost
})

export default rootReducer;