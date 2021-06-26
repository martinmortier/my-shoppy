import userService from "../../services/userService"
const initialState = {
    tokenJWT: '',
    login: ''
}
const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_USER':
            return {
                ...state,
                tokenJWT: action.payload.token,
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
export default userReducer