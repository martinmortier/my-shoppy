import { Link } from 'react-router-dom'
import { UnorderedList, List } from './Navbar.styles'

const Navbar = () => {
    return (
        <nav>
            <UnorderedList>
                <List>
                    <Link to="/">Home</Link>
                </List>
                <List>
                    <Link to="/productList">Product List</Link>
                </List>
                <List>
                    <Link to="/shoppingCart">Shopping cart</Link>
                </List>
                <List>
                    <Link to="/login">Log in</Link>
                </List>
            </UnorderedList>
        </nav>
    )
}

export default Navbar