import userService from "../../services/userService"
const initialState = {
    tokenJWT: '',
    login: ''
}
const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_USER':
            return console.log("ACTION PAYLOAD",action.payload)
        default:
            return state
    }
}

export const loginUser = async (user) => {
    console.log("passe ici")
    return async dispatch => {
        const userLogged = userService.getUser(user)
        dispatch({
            type: 'LOGIN_USER',
            payload: userLogged 
        })
    }
}
export default userReducer