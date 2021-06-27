import { useSelector } from 'react-redux'
import Product from '../product/Product'

const ShoppingCart = () => {
    const shoppingCarts = useSelector(state => state.shoppingCart)

    return (
        <div>
            {shoppingCarts.products.length > 0 ?
                <div>
                    {shoppingCarts.products.map((product, index) =>
                        <Product key={index} product={product} displayImage={false} />
                    )}
                    <p>Total: {shoppingCarts.total}</p>
                </div>
                :
                <div>
                    <p>Empty !</p>
                </div>
            }
        </div>
    )
}

export default ShoppingCart