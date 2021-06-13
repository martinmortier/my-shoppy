import { useSelector } from 'react-redux'

const Product = () => {
    const products = useSelector(state => state.product)
    return (
        <div>
            { products }
        </div>
    )
}

export default Product