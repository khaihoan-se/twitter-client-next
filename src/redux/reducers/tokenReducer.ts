import ACTIONS from '../actions'

const token = ''

const tokenReducer = (state = token, action: any) => {
    switch(action.type){
        case ACTIONS.TOKEN:
            return action.payload
        default:
            return state
    }
}

export default tokenReducer