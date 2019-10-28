import React from 'react'
import './dependences'
import { HashRouter } from 'react-router-dom'

import Logo from '../common/template/logo'
import Nav from '../common/template/nav'
import Footer from '../common/template/footer'
import Routes from './routes'


export default props => (
    <HashRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
)