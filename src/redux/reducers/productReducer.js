import productService from "../../services/productService"

const productReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT_PRODUCT':
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
export default productReducer