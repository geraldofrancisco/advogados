import React from 'react'
import {PanelMenu} from 'primereact/panelmenu';
import './nav.css'

const items = [
    {
        label: 'Dashboard',
        url: '#/'
    },
    {
        label: 'Cadastro',
        items:[
            {
                label:'Usuário',
                icon: 'pi pi-user',
                url: '#/users'
            }
        ]
    }
]

export default props => (
    <aside className="menu-area">
       <PanelMenu model={items} /> 
    </aside>
)