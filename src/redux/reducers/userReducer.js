import userService from "../../services/userService"
const initialState = {
    token: '',
    login: ''
}
const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_USER':
            localStorage.setItem('TOKENJWT',JSON.stringify(action.payload))
            return {
                ...state,
                token: action.payload.token,
                login: action.payload.login
            }
        case 'USER_LOGGED':
            return {
                ...state,
                token: action.payload.token,
                login: action.payload.login
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
    console.log(user);
    return {
        type: 'USER_LOGGED',
        payload: user
    }
}
export default userReducer