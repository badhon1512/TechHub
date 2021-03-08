import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import '../style/Navbar.module.css'

function NavBar() {
  return (
    <div>

      
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Tech-Hub</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Laptop</Nav.Link>
      <Nav.Link href="#pricing">Camera</Nav.Link>
      <Nav.Link href="#pricing">Tab</Nav.Link>
    </Nav>
    <Form inline className="mr-3">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"23rem"}} />
      <Button  variant="outline-info">Search</Button>
    </Form>

    <Nav className="mr-1 ml-1">

    <Nav.Link href="#pricing">Login</Nav.Link>
      
      <Nav.Link href="#pricing" > <img  style={{height:"2rem", width:"2rem"}} src="./assets/cart.svg" alt=""/>

</Nav.Link>
    </Nav>
  </Navbar>
  <br />
  
    </div>
  )
}
export default  NavBar
