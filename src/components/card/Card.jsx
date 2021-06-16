import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProduct } from '../../redux/reducers/productReducer'
import { Grid, Paper, Button } from '@material-ui/core'
import { useStyles } from './Card.styles'
import Product from '../product/Product'
import { increaseTotal } from '../../redux/reducers/shoppingCartReducer'

const Card = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeProduct())
    }, [dispatch])
    const products = useSelector(state => state.product)
    const classes = useStyles()
    return (
        <div>
            <Grid container>
            {products.map((product, index) =>
                <Grid key={index} item lg={4} sm={4} xs={12} style={{width:'10vw'}}>
                    <Paper elevation={2}>
                        <Grid container direction="column" alignContent='center'>
                            <Product product={product} />
                        </Grid>
                        <Button onClick={() => dispatch(increaseTotal(1))} className={classes.buttonValidate} variant="contained">Validate</Button>
                    </Paper>
                </Grid>
            )}
            </Grid>
        </div>
    )
}

export default Card