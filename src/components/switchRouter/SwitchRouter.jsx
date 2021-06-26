import { Switch, Route, Redirect } from 'react-router-dom'
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Login from "../login/Login";
import ProductPage from "../../pages/productPage/ProductPage"
import App from "../../pages/appPage/App";
import { useSelector } from 'react-redux'
 const SwitchRouter = () => {
     const user = useSelector(state => state.user)
    return (
        <div>
            <Switch>
                <Route path="/shoppingCart">
                    <ShoppingCart />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/productList">
                    {user.token ? <ProductPage /> : <Redirect to="/login" /> }
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </div>
    )
}

export default SwitchRouter