import DashboardMenu from '../../components/dashboardMenu/DashboardMenu'
import DashboardCategory from '../../components/dashboardCategory/DashboardCategory'
import { Layout, Title } from './DashboardPage.styles'
const DashboardPage = () => {
    return (
        <div>
           <Title>Welcome to the dashboard</Title>
           <Layout>
                <DashboardMenu />
                <DashboardCategory />
           </Layout>
        </div>
    )
}
export default DashboardPage
