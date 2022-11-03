import React, { Component } from 'react';
import Add from './components/Add';
import View from './components/View';
import {Container, Input,Button} from 'semantic-ui-react';
import { uuid } from 'uuidv4'



export default class App extends Component {
    state={
        users:[
            {
                id:uuid(),
                username:'Sita1',
                name:'Sita',
                description: "Last Seen watchin Just Now",
              },
              {
                id:uuid(),
                username:'hari2',
                name:'Hari',
                description: "Last Seen watchin 2 mins ago",
              }
        ],
        
    }
    

    SearchUser=(event) =>{
        const {users}=this.state
   
        let checkUser=(event.target.value).toLowerCase().trim()
        var found=[]
     users.map((u) => { 
            let user=((u.username).toLowerCase()).trim()
            
            if(user.includes(checkUser)){
                     found.push(u)   //display found users
                }
                    }
                )  
        this.setState( { found } )
        
    };


    AddData= (user) => {

        const {users} =this.state
        this.setState({users:[...users,user]})
        
    };

    deleteUser= (user) => {

        const {users} =this.state
 
        this.setState(
            {
                users: users.filter((u) => u.id !== user[0].id )
            }
        )
        //DELETE USER HERE
    }

    userEdit= (user) => {
        const {users} =this.state
        var index=users.map((u) => {console.log(u.id,' ', user.id); return u.id == user.id})
 
        console.log(user)
        console.log(index)

    }


    render() {
    const {users, found}=this.state

    let searched=document.getElementById('search')
    var searchVal=false
    if(searched!=undefined){ 
        if(searched.value){
        var searchVal=true
        }
    }
        var show={found}.found
        
        if(searchVal==false){
            var show=users
        }
  

        return (
            <Container>
            <div>
           <Add onSubmit={this.AddData}/>
                <Input icon="search" placeholder='Search Username' onChange={this.SearchUser} id='search'></Input>
         
                <View data={ show } onDelete={this.deleteUser} userEdit={ this.userEdit }/>
            
            </div>
            </Container>
        )
    }
}
