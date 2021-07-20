import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../redux/reducers/categoryReducer'
import { TextField, Button } from '@material-ui/core'
const AddCategory = () => {
    const [productName, setProductName] = useState('')
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        productName ? dispatch(addCategory(productName,user.id_shop)) : console.error("Error for dispatch")
    }
    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <TextField type="text" placeholder="Category name" value={productName} onChange={event => setProductName(event.target.value)} />
                <Button variant="contained" type="submit" color="primary">Send</Button>
            </form>  
        </div>
    )
}

export default AddCategory
