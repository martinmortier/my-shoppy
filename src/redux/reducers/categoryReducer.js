import categoryService from '../../services/categoryService'
const categoryReducer = (state = [], action) => {
   switch(action.type){
       case 'ADD_CATEGORY':
        return action.payload.data
       default:
           return state 
   } 
}

export const addCategory = (name, shop_id) => {
    return async dispatch => {
        if(name && shop_id){
            await categoryService.addCategory(name, shop_id)
            const data = await categoryService.getCategories()
            dispatch({
                type: 'ADD_CATEGORY',
                payload: data
            })
        }else{
            console.log('name or shop_id params not found')
        }
    }
}

export default categoryReducer