import { combineReducers } from 'redux'
import productReducer from './reducers/productReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
    product: productReducer,
    shoppingCart : shoppingCartReducer,
    user: userReducer
})

export default rootReducer