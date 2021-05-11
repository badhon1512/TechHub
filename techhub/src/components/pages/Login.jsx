import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'

import {useHistory} from 'react-router-dom'

function Login() {

 const  [user,setUser]=useState({email:"",password:""});
 const  [valid,setValid]=useState({email:"",password:""});
 const [userData,setUserData]=useState([]);

 const history=useHistory();


 async function validation(e)
 {
   e.preventDefault();

   var valid=true;
   setValid({email:"",password:""});
   let validobj={email:"",password:""};
   var emailreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

   if(user.password.length<8)
   {
     validobj.password="Password length must be at least 8 char";
     valid=false;
          
   }

   if(user.email.search(emailreg))
   {

    validobj.email="Please enter a valid email";
    valid=false;
     
    
    
   }


   setValid(validobj);

   if(valid)
   {
       let result= await fetch('http://127.0.0.1:8000/api/login',{
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)

        })

        

        if(result.status==200)
        {
          result=await result.json();
          result=result[0];

          if(result)
          {
            alert("Login successfull");
            localStorage.setItem('user',JSON.stringify(result));
            history.push('/dashboard')
          }
          else{
            alert("User name or password is Invalid");
          }
        }
        else{
          console.log('no');
        }
        
   }


   
 }
  return (
    <div style={{marginTop:'80px'}}>


<Form className="col-sm-6 offset-3 ">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={user.email}  onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder="Enter email" />

    <Form.Text  className="text-danger">
      {valid.email}
    </Form.Text>
    
  </Form.Group>

  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder="Password" />
  </Form.Group>
   
  <Form.Text  className="text-danger">
      {valid.password}
    </Form.Text>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button onClick={(e)=>validation(e)}   variant="primary" type="submit">
   Login
  </Button>
</Form>
      
    </div>
  )
}

export default Login;
