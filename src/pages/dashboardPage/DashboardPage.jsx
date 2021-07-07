import { useState } from 'react'
import DashboardMenu from '../../components/dashboardMenu/DashboardMenu'
import DashboardCategory from '../../components/dashboardCategory/DashboardCategory'
import DashboardProduct from '../../components/dashboardProduct/DashboardProduct'
import { Layout, Title } from './DashboardPage.styles'
const DashboardPage = () => {
    const [currentComponent, setCurrentComponent] = useState('DashboardCategory')
    const changeMain = (component) => {
        switch(component){
            case 'DashboardCategory':
                setCurrentComponent('DashboardCategory')
                break
            case 'DashboardProduct':
                setCurrentComponent('DashboardProduct')
                break
            case 'DashboardOverview':
                setCurrentComponent('DashboardOverview')
            default:
                return null
        }
    }

    const displayMain = () => {
        if(currentComponent === 'DashboardCategory'){
            return <DashboardCategory />
        }
        else if(currentComponent === 'DashboardProduct'){
            return <DashboardProduct />
        }
    }
    return (
        <div>
           <Layout>
                <DashboardMenu changeMain={changeMain}/>
                <Title>Welcome to the dashboard</Title>
                {displayMain()}
           </Layout>
        </div>
    )
}
export default DashboardPage
