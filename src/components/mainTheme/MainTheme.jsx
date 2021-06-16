import { Header, Content } from "./MainTheme.styles"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShoppingCart from "../shoppingCart/ShoppingCart"
import App from "../../pages/App"
import Navbar from '../navbar/Navbar'

const MainTheme = (props) => {
    return (
        <div>
            <Router>
            <Header>
                <Navbar />
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
