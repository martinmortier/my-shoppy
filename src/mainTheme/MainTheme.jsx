import { Header, Content } from "./MainTheme.styles"

const MainTheme = (props) => {
    return (
        <>
            <Header>
            NAVBAR HERE
            </Header>
            <Content>
                { props.children }
            </Content>
        </>
    )
}

export default MainTheme
