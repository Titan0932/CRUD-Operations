import React, { Component } from 'react'
import { Button, Table, Modal,Form, Input, FormField } from 'semantic-ui-react';
import Edit from './Edit';


export default class View extends Component {

    deleteUsers(id){
        const users= this.props.data

        var user= users.filter((u) => u.id==id)
        
        this.props.onDelete(user)
    }

    onEdit=(user) => {
     this.props.userEdit(user)
    
        
    }

    render() {
        const user= this.props.data
        
       
        return (
            <div>
              
                <Table sortable called fixed>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>
                                ID
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Name
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Username
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Description
                            </Table.HeaderCell>
                            
                        </Table.Row>
                    </Table.Header>
   
                    <Table.Body>
                        {
                        user.map( (datas) => {
                    
                            return(
                                <Table.Row key={datas.id}>
                                <Table.Cell>
                                    {datas.id}     
                                    </Table.Cell>
                                    <Table.Cell>
                                        {datas.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {datas.username}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {datas.description}  
                                    </Table.Cell>
                                    <Table.Row>

                                    <Table.Cell>
                                        <Modal trigger={<Button> Edit </Button>}>
                                            <Modal.Header> Edit Details</Modal.Header>
                                            <Modal.Description>
                                                <Edit data={ datas } onEdit={ this.onEdit }/>
                                            </Modal.Description>
                                            </Modal>
                                            
                                           <Button onClick={this.deleteUsers.bind(this,datas.id)}> Delete </Button>
                                    </Table.Cell>

                                    </Table.Row>
                                </Table.Row>
                                )
                            }
                            )
                        }
                       
                    </Table.Body>

                </Table>
                
            </div>
        )
    }
}
