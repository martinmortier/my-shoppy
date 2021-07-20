import { Header, Content } from "./MainTheme.styles"
import { BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userLogged } from '../../redux/reducers/userReducer'
import { initalizeCategories } from "../../redux/reducers/categoryReducer"
const MainTheme = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(localStorage.getItem('TOKENJWT')){
            dispatch(userLogged(JSON.parse(localStorage.getItem('TOKENJWT'))))
        }
        dispatch(initalizeCategories())
    },[dispatch])
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
