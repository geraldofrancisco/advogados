import React from 'react'
import Main from '../../common/template/main'

const propsHeader = {
    icon: 'home',
    title: 'Home',
    subtitle: 'Seja bem vindo'
}
export default props => (
    <Main {...propsHeader} >
        componente home
    </Main>
)
