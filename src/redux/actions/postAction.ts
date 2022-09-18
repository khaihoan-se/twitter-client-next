import ACTIONS from '.'

export const createPostAction = (data: any) => {
    return {
        type: ACTIONS.CREATE_POST,
        payload: data
    }
}
export const getPostAction = (data: any) => {
    return {
        type: ACTIONS.GET_POST,
        payload: data
    }
}