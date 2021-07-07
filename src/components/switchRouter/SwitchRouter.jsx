import { Switch, Route, Redirect } from 'react-router-dom'
import ShoppingCartPage from '../../pages/shoppingCartPage/ShoppingCartPage'
import Login from "../login/Login";
import ProductPage from "../../pages/productPage/ProductPage"
import App from "../../pages/appPage/App";
import Dashboard from "../../pages/dashboardPage/DashboardPage"
import { useSelector } from 'react-redux'
const SwitchRouter = () => {
    const user = useSelector(state => state.user)
    return (
        <div>
            <Switch>
                <Route path="/shoppingCart">
                    {user.token ? <ShoppingCartPage /> : <Redirect to="/login" /> }
                </Route>
                <Route path="/login">
                    {!user.token ? <Login /> : <Redirect to="/" /> }
                </Route>
                <Route path="/productList">
                    {user.token ? <ProductPage /> : <Redirect to="/login" /> }
                </Route>
                <Route path="/dashboard">
                    {user.token ? <Dashboard /> : <Redirect to="/login" />}
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </div>
    )
}

export default SwitchRouter