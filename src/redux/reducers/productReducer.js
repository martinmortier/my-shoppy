import productService from "../../services/productService"

const productReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT_PRODUCT':
            return action.payload.data
        case 'GET_PRODUCT_BY_CATEGORY':
            return action.payload.data
        default:
            return state
    }
}

export const initializeProduct = () => {
    return async dispatch => {
        const data = await productService.getAll()
        dispatch({
            type:'INIT_PRODUCT',
            payload: {
                data
            }
        })
    }
}

export const getProductByCategory = id => {
    return async dispatch => {
        const data = await productService.getProductByCategory(id)
        dispatch({
            type:'GET_PRODUCT_BY_CATEGORY',
            payload: {
                data
            }
        })
    }
}

export default productReducer