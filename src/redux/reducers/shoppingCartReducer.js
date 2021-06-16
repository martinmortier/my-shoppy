const initialState = {
    total: 0
}

const shoppingCartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREASE_TOTAL':
            return {
                ...state,
                total: state.total +=action.payload.product_price
            }
        default:
            return state
    }
}

export const increaseTotal = (product_price) => {
    return {
        type: 'INCREASE_TOTAL',
        payload: {
            product_price
        }
    }
}

export default shoppingCartReducer