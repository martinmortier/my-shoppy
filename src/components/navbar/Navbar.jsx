import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/productList">Product List</Link>
                </li>
                <li>
                    <Link to="/shoppingCart">Shopping cart</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar