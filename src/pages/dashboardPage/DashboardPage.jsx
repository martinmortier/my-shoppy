import { useState } from 'react'
import DashboardMenu from '../../components/dashboardMenu/DashboardMenu'
import DashboardCategory from '../../components/dashboardCategory/DashboardCategory'
import DashboardProduct from '../../components/dashboardProduct/DashboardProduct'
import { Layout, Title } from './DashboardPage.styles'
const DashboardPage = () => {
    const [currentComponent, setCurrentComponent] = useState('DashboardCategory')
    
    const displayMain = () => {
        switch(currentComponent){
            case 'DashboardCategory':
                return <DashboardCategory />
            case 'DashboardProduct':
            return <DashboardProduct />
            case 'DashboardOverview':
                //TODO: Implement DashboardOverview component
                return null
            default:
                return null
        }
    }
    return (
        <div>
           <Layout>
                <DashboardMenu setCurrentComponent={setCurrentComponent}/>
                <Title>Welcome to the dashboard</Title>
                {displayMain()}
           </Layout>
        </div>
    )
}
export default DashboardPage
