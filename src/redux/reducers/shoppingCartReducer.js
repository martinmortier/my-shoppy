const initialState = {
        products: [],
        total: 0
}

const shoppingCartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: state.products.concat(action.payload.product),
                total: state.total+= action.payload.product.price
            }
        case 'GET_SHOPPING_CART':
            return state
        default:
            return state
    }
}

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            product
        }
    }
}

export default shoppingCartReducer