import { useState } from 'react'
import DashboardMenu from '../../components/dashboardMenu/DashboardMenu'
import DashboardCategory from '../../components/dashboardCategory/DashboardCategory'
import DashboardProduct from '../../components/dashboardProduct/DashboardProduct'
import DashboardOverview from '../../components/dashboardOverview/DashboardOverview'
import { Layout } from './DashboardPage.styles'
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
                return <DashboardOverview />
            default:
                return null
        }
    }
    return (
        <div>
           <Layout>
                <DashboardMenu setCurrentComponent={setCurrentComponent}/>
                {displayMain()}
           </Layout>
        </div>
    )
}
export default DashboardPage
