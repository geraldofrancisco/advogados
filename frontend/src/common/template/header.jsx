import React from 'react'
import PrimeIcon from '../../components/primeIcon/primeIcon'
import './header.css'

export default props => (
    <header className="header">
        <h1>
            <PrimeIcon label={props.icon} /> {props.title}
        </h1>
        <p className='subtitle'>{props.subtitle}</p>
    </header>
)