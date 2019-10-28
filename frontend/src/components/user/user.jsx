import React, { Component } from 'react'
import Main from '../../common/template/main'
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const propsHeader = {
    icon: 'user',
    title: 'Usuário',
    subtitle: 'Cadastre os usuários do sistema'
}

const config = {
    loading: false,
    rows: 1,
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

export default class User extends Component {

    state = { ...config }
    onPage = this.onPage.bind(this)
    actionTemplate = this.actionTemplate.bind(this)

    onPage(event) {
        this.setState({
            loading: true
        });

        setTimeout(() => {

            const startIndex = event.page + 1;

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
                <Card>
                    <div className='row'>
                        <div className='col-6'>xpto</div>
                        <div className='col-6'>xpto</div>
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