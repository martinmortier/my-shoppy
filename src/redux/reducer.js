import { combineReducers } from 'redux'
import productReducer from './reducers/productReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'

const rootReducer = combineReducers({
    product: productReducer,
    shoppingCart : shoppingCartReducer
})

export default rootReducer