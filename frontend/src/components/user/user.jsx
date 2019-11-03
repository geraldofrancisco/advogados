import React, { Component } from 'react'
import Main from '../../common/template/main'
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputSwitch } from 'primereact/inputswitch';

const propsHeader = {
    icon: 'user',
    title: 'Usuário',
    subtitle: 'Cadastre os usuários do sistema'
}

const config = {
    loading: false,
    rows: 2,
    first: 0,
    totalRecords: 2,
    list: [
        {
            _id: 'sdfadsf26855',
            nome: 'Francisco Benfica',
            email: 'fb@pecegoebenfica.com.br',
            ativo: 'sim'
        },
        {
            _id: 's28fadsf26855',
            nome: 'Geraldo Francisco Neto',
            email: 'geraldof.neto2016@gmail.com',
            ativo: 'sim'
        }
    ]
}

const footer = <span>
                <Button label="Buscar" icon="pi pi-search" style={{marginRight: '5px'}}/>
                <Button label="Limpar" icon="pi pi-times" className="p-button-secondary"/>
             </span>;

export default class User extends Component {

    state = { ...config }
    onPage = this.onPage.bind(this)
    actionTemplate = this.actionTemplate.bind(this)

    onPage(event) {
        this.setState({
            loading: true
        });

        setTimeout(() => {

            this.setState({
                first: event.page,
                loading: false,
                list: [config.list[event.page]]
            })

        }, 1000)
    }

    actionTemplate(column) {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" tooltip="Editar" tooltipOptions={{ position: 'top' }}
                    className="p-button-raised p-button-rounded p-button-warning" />
                <Button icon="pi pi-trash" tooltip="Excluir" tooltipOptions={{ position: 'top' }}
                    className="p-button-raised p-button-rounded p-button-danger" />
            </React.Fragment>
        )
    }

    render() {
        return (
            <Main {...propsHeader}>
                <Card footer={footer}>
                    <div className='row'>
                        <div className='col-4'>
                            <div><label htmlFor="nome">Nome:</label> </div>
                            <InputText id="nome" value={this.state.value} />
                        </div>
                        <div className='col-4'>
                            <div><label htmlFor="email">E-mail:</label> </div>
                            <InputText id="email" value={this.state.value} />
                        </div>
                        <div className='col-4'>
                            <div><label htmlFor="ativo">Ativo:</label> </div>
                            <InputSwitch checked={this.state.active} onChange={(e) => this.setState({active: e.value})} />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className='row'>
                        <div className='col-12'>
                            <DataTable value={this.state.list} paginator={true} rows={this.state.rows}
                                onPage={this.onPage} lazy={true} loading={this.state.loading}
                                totalRecords={this.state.totalRecords} first={this.state.first}>
                                <Column field="nome" header="Nome" />
                                <Column field="email" header="E-mail" />
                                <Column field="ativo" header="Ativo" />
                                <Column body={this.actionTemplate} header="Ações" />
                            </DataTable>
                        </div>
                    </div>
                </Card>
            </Main>
        )
    }
}