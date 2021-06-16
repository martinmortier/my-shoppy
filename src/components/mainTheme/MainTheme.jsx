import { Header, Content } from "./MainTheme.styles"
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShoppingCart from "../shoppingCart/ShoppingCart"
import App from "../../pages/App"
const MainTheme = (props) => {
    return (
        <div>
            <Router>
            <Header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shoppingCart">List of products</Link>
                            </li>
                    </ul>
                    </nav>
            </Header>
            <Content>
                <Switch>
                    <Route path="/shoppingCart">
                        <ShoppingCart />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </Content>
            </Router>
        </div>
    )
}

export default MainTheme
