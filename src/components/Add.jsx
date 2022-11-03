import React, { Component } from 'react'
import { Button, Form,Modal } from 'semantic-ui-react';
import { uuid } from 'uuidv4'

export default class Add extends Component {

    

       

     AddData = (event) => {
        event.preventDefault();
        var user= this.props.onSubmit

            var fname=document.getElementById('fname').value
            var uname=document.getElementById('uname').value
            var desc= document.getElementById('desc').value

        
                
        this.props.onSubmit({   
            id:uuid(),
            username:fname,
            name: uname,
            description:desc,
        })
 
        
                
    }

    
    render() {    
        
        
        return (
            
                <Modal trigger={<Button> Add User </Button>}>
                            <Modal.Header> Add user</Modal.Header>
                            <Modal.Description>
                            <Form onSubmit={ this.AddData }>
                                <Form.Field>
                                <label> Name</label>
                                <input placeholder='First Name' id='fname' />
                                </Form.Field>
                                <Form.Field>
                                <label>UserName</label>
                                <input placeholder='User Name' id='uname' />
                                </Form.Field>
                                <Form.Field>
                                <label> Description </label>
                                <input placeholder='Description' id='desc'/>
                                </Form.Field>
                                <Button type='submit'> Submit </Button>
                            </Form>
                            </Modal.Description>
            </Modal> 
            
            
)
            
    }
}
