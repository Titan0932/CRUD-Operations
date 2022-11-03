import React, { Component } from 'react'
import { Button, Input,Form } from 'semantic-ui-react'

export default class Edit extends Component {

    EditChanges=(event) =>{
       
        event.preventDefault();
        var fname=document.getElementById('fname').value
        var uname=document.getElementById('uname').value
        var desc= document.getElementById('desc').value
        var uid=document.getElementById('uid').innerHTML
        
        this.props.onEdit(
            {
                id:uid,
                username: uname,
                name: fname,
                description: desc,
            }
        )

        
    }
    render() {
        const editUser=this.props.data
        console.log(editUser)
       
        
        
        return (
            <div>
                 
             <Form onSubmit={this.EditChanges}>
             <Form.Field>
             <label> USER: </label>  <p id='uid'>   { editUser.id }  </p>
                
             <label> Name</label>
             <Input defaultValue={editUser.name} id='fname' />
             </Form.Field>
             <Form.Field>
             <label>UserName</label>
             <Input defaultValue={editUser.username} id='uname' />
             </Form.Field>
             <Form.Field>
             <label> Description </label>
             <Input defaultValue={editUser.description} id='desc'/>
             </Form.Field>
            
             <Button type='submit'> Save Changes </Button>
         </Form>


         </div>

            
           
           
        )
    }
}
