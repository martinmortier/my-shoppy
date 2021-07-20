import userService from "../../services/userService"
const initialState = {
    token: '',
    login: '',
    id_shop: '',
}
const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_USER':
            localStorage.setItem('TOKENJWT',JSON.stringify(action.payload))
            return {
                ...state,
                ...action.payload
            }
        case 'USER_LOGGED':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const loginUser = user => {
    return async dispatch => {
        const userLogged = await userService.getUser(user)
        dispatch({
            type: 'LOGIN_USER',
            payload: userLogged
        })
    }
}

export const userLogged = user => {
    return {
        type: 'USER_LOGGED',
        payload: user
    }
}
export default userReducer