import { Grid  } from '@material-ui/core'

type ProductProps = {
    product_id: number,
    product_name: string,
    product_price: number
}

const Product = (props: ProductProps) => {
    const { product_id, product_name, product_price } = props
    return (
        <div>
            <Grid item>
                <img style={{height:'auto',width:'150px'}} src={"https://www.bakersathome.be//assets/uploads/content/_1000xAUTO_fit_center-center_80_none/Dinsdag.jpg"} alt="pain" /> 
            </Grid>
            <Grid item>
                Name : {product_name}
            </Grid>
            <Grid item>
                Price : {product_price}
            </Grid>
        </div>
    )
}

export default Product