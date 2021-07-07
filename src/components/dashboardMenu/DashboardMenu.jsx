import { Layout } from './DashboardMenu.styles'
import CategoryIcon from '@material-ui/icons/Category';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DashboardIcon from '@material-ui/icons/Dashboard';
const DashboardMenu = (props) => {
    return (
        <Layout>
            <p onClick={() => props.setCurrentComponent('DashboardOverview')}><DashboardIcon />{' '}Overview</p>
            <p onClick={() => props.setCurrentComponent('DashboardCategory')}><CategoryIcon />{' '}Category</p>
            <p onClick={() => props.setCurrentComponent('DashboardProduct')}><InsertDriveFileIcon />{' '}Product</p>
        </Layout>
    )
}

export default DashboardMenu
