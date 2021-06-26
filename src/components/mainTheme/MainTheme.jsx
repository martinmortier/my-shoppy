import { Header, Content } from "./MainTheme.styles"
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
const MainTheme = (props) => {
    return (
        <div>
            <Router>
                <Header>
                    <Navbar />
                </Header>
                <Content>
                    {props.children}
                </Content>
            </Router>
        </div>
    )
}

export default MainTheme
