import { TextField, Button, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [categorySelected, setCategorySelected] = useState('')
    const categories = useSelector(state => state.category)
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!productName && !categorySelected) return console.error("Product name and category are required")

        
    }
    return (
        <div>
           <form onSubmit={(event) => handleSubmit(event)}>
            <TextField type="text" placeholder="Product Name" value={productName} onChange={(event) => setProductName(event.target.value)} /> <br />
            <FormControl style={{minWidth:'120px'}}>
                <InputLabel>Categories</InputLabel>
                <Select value={categorySelected} onChange={(event) => setCategorySelected(event.target.value)}>
                    {categories.map(category => <MenuItem key={category.id_category} value={category.id_category}>{category.name}</MenuItem>)}
                </Select>
            </FormControl> <br />
            <Button type="submit" variant='contained' color='primary'>Send</Button>
           </form>
        </div>
    )
}

export default AddProduct
