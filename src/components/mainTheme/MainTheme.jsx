import { Header, Content } from "./MainTheme.styles"
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogged } from '../../redux/reducers/userReducer'
const MainTheme = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(localStorage.getItem('TOKENJWT')){
            dispatch(userLogged(JSON.parse(localStorage.getItem('TOKENJWT'))))
        }
    },[])
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
