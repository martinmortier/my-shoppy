import categoryService from '../../services/categoryService'
const categoryReducer = (state = [], action) => {
   switch(action.type){
       case 'INIT_CATEGORIES':
        return action.payload.data
       case 'ADD_CATEGORY':
        return action.payload.data
       default:
           return state 
   } 
}

export const initalizeCategories = () => {
    return async dispatch => {
        try{
            const categories = await categoryService.getCategories()
            dispatch({
                type: 'INIT_CATEGORIES',
                payload: {
                    data: categories
                } 
            })
        }catch(err){
            console.log(err)
        }
    }
}
export const addCategory = (name, id_shop) => {
    return async dispatch => {
        if(name && id_shop){
            await categoryService.addCategory(name, id_shop)
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