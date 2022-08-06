import ACTIONS from '@/redux/actions/index'

const initialState = {
    user: [],
    isLogged: false,
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true
            }
        case ACTIONS.USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case ACTIONS.LOGOUT: {
            return {
                ...state,
                user: [],
                isLogin: false,
            }
        }
        default:
            return state
    }
}

export default authReducer;