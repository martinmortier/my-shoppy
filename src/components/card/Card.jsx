import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProduct } from '../../redux/reducers/productReducer'
import { Grid, Paper, Button } from '@material-ui/core'
import { useStyles } from './Card.styles'
import Product from '../Product'
const Card = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeProduct())
    }, [dispatch])
    const products = useSelector(state => state.product)
    const classes = useStyles()
    return (
        <div>
            <Grid container spacing={1}>
            {products.map((product, index) =>
                <Grid key={index} item lg={3} sm={4} xs={12}>
                    <Paper elevation={2}>
                        <Grid container direction="column" alignContent='center'>
                            <Product product={product} />
                        </Grid>
                        <Button className={classes.buttonValidate} variant="contained" style={{width:'100%'}}>Valider</Button>
                    </Paper>
                </Grid>
            )}
            </Grid>
        </div>
    )
}

export default Card