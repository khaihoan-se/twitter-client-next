// reducers/hobby.js
const initialState = {
    posts: []
}
const createPost = (state = initialState, action: any) => {
    switch (action.type) {
        case 'createPost/addDescription': {
            const newPosts = [action.payload, ...state.posts]
            // newPosts.unshift(action.payload)
            return {
                ...state,
                posts: newPosts
            }
        }
        case 'createPost/addImages': {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
        return state
    }
};
export default createPost;