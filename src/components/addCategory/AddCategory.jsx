import React from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../redux/reducers/categoryReducer'
const AddCategory = () => {
    const [productName, setProductName] = React.useState('')
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        productName ? dispatch(addCategory(productName,1)) : console.log("Error")
    }
    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <input type="text" placeholder="Category Name" value={productName} onChange={event => setProductName(event.target.value)} />
                <button type="submit">Send</button>
            </form>  
        </div>
    )
}

export default AddCategory
