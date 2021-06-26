import { Grid  } from '@material-ui/core'
import PropTypes from 'prop-types'

const Product = (props) => {
    const { name, price }= props.product
    const { displayImage } = props
    return (
        <div>
            {displayImage && <Grid item>
                <img style={{height:'auto',width:'150px'}} src={"https://www.bakersathome.be//assets/uploads/content/_1000xAUTO_fit_center-center_80_none/Dinsdag.jpg"} alt="pain" /> 
            </Grid> }
            <Grid item>
                Name : {name}
            </Grid>
            <Grid item>
                Price : {price}
            </Grid>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    displayImage: PropTypes.bool.isRequired
}

export default Product