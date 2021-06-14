import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProduct } from '../redux/reducers/productReducer'
import { Grid, Paper } from '@material-ui/core'
const Product = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeProduct())
    }, [])
    const products = useSelector(state => state.product)
    return (
        <div>
            <Grid container spacing={1}>
            {products.map(product =>
                <Grid item lg={3} sm={4} xs={12} >
                    <Paper elevation={2}>
                        {product.product_name}
                    </Paper>
                </Grid>
            )}
            </Grid>
        </div>
    )
}

export default Product