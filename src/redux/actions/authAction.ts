import ACTIONS from ".";

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}
export const dispatchUser = (data: any) => {
    return {
        type: ACTIONS.USER,
        payload: data
    }
}
export const dispatchLogout = () => {
    return {
        type: ACTIONS.LOGOUT,
    };
}
export const dispatchToken = (data: any) => {
    return {
        type: ACTIONS.TOKEN,
        payload: data
    }
}