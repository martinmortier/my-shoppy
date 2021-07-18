import { combineReducers } from 'redux'
import productReducer from './reducers/productReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'
import userReducer from './reducers/userReducer'
import categoryReducer from './reducers/categoryReducer'
const rootReducer = combineReducers({
    product: productReducer,
    shoppingCart : shoppingCartReducer,
    user: userReducer,
    category: categoryReducer,
})

export default rootReducer