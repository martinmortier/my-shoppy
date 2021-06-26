import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProduct } from '../../redux/reducers/productReducer'
import { Grid, Paper, Button } from '@material-ui/core'
import { useStyles } from './ProductList.styles'
import Product from '../product/Product'
import { addProduct } from '../../redux/reducers/shoppingCartReducer'

const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeProduct())
    }, [dispatch])

    const products = useSelector(state => state.product)
    const classes = useStyles()
    return (
        <div>
            <Grid container>
            {products.map((product, index) => (
                <Grid key={index} item lg={4} sm={4} xs={12}>
                    <Paper elevation={2}>
                    <Grid container direction="column" alignContent="center">
                        <Product product={product} displayImage={true} />
                    </Grid>
                    <Button
                        onClick={() => dispatch(addProduct(product))}
                        className={classes.buttonValidate}
                        variant="contained"
                    >
                    Validate
                    </Button>
                </Paper>
                </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default ProductList 