import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'

function Login() {

 const  [user,setUser]=useState({email:"",password:""});
 const  [valid,setValid]=useState({email:"",password:""});


 function validation(e)
 {
   e.preventDefault();
   setValid({email:"",password:""});
   let validobj={email:"",password:""};
   var emailreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

   if(user.password.length<8)
   {
     validobj.password="Password length must be at least 8 char";
          
   }

   if(user.email.search(emailreg))
   {

    validobj.email="Please enter a valid email";
     
    
    
   }


   setValid(validobj);


   
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
