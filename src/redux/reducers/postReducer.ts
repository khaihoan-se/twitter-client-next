import ACTIONS from '../actions'

const initialState: any = {
    posts: []
}

const postReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTIONS.CREATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case ACTIONS.GET_POST: 
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    }
}

export default postReducer