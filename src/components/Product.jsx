import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProduct } from '../redux/reducers/productReducer'
const Product = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeProduct())
    }, [])
    const products = useSelector(state => state.product)
    return (
        <div>
            {products.map(product => product.product_name)}
        </div>
    )
}

export default Product