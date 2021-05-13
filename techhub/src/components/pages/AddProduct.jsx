import {Form,Button} from 'react-bootstrap'

import { useState } from 'react'

const AddProduct=()=>{


  const [product,setProduct]=useState({model:'',price:'',quantity:'',warranty:'',decription:'',picture:''})

  const [productValid,setProductValid]=useState({model:'',price:'',quantity:'',warranty:'',decription:'',type:'laptop',picture:'pic'})


  const validation=(e)=>{

    e.preventDefault()

    let productvalidInfo={model:'',price:'',quantity:'',warranty:'',decription:'',picture:''}
    let flag=true;


    if( product.model.length<5)
    {
         productvalidInfo.model="Please enter a valid model name";
         flag=false;
    }

    if(product.price==="" || product.price<0)
    {
         productvalidInfo.price="Please enter a valid price";
         flag=false;

    }

    if(product.quantity==="" || product.quantity<0)
    {
         productvalidInfo.quantity="Please enter a valid Quantity";
         flag=false;
    }

    if(product.warranty==="" || product.warranty<0)
    {
         productvalidInfo.warranty="Please enter a valid warranty years";
         flag=false;

    }

  if(product.description==="")
    {
         productvalidInfo.description="Description must be at least 20 characters";
         flag=false;
    }







    setProductValid(productvalidInfo);

    if(flag){

      fetch()
    }

    

  }



  return(

    <div style={{marginTop:'10px', marginBottom:'100px'}}>

      <h4 className={'text-center text-warning'}>Add New Product</h4>


<Form className="col-sm-6 offset-3 ">
  <Form.Group controlId="">
    <Form.Label>Model</Form.Label>
    <Form.Control onChange={(e)=>setProduct({...product,model:e.target.value})}  type="text" placeholder="Model name" />

    <Form.Text  className="text-danger">
      
    </Form.Text>


   
    
  </Form.Group>
  <Form.Text  className="text-danger">
  {productValid.model}
    </Form.Text>


  <Form.Group controlId="">
    <Form.Label>Price</Form.Label>
    <Form.Control onChange={(e)=>setProduct({...product,price:e.target.value})} type="number" placeholder="Price" />

    <Form.Text  className="text-danger">
      
    </Form.Text>
    
  </Form.Group>


  <Form.Text  className="text-danger">
  {productValid.price}
    </Form.Text>


  <Form.Group controlId="">
    <Form.Label>Quantity</Form.Label>
    <Form.Control onChange={(e)=>setProduct({...product,quantity:e.target.value})}  type="number" placeholder="Quantity" />

    <Form.Text  className="text-danger">
      
    </Form.Text>
    
  </Form.Group>

  <Form.Text  className="text-danger">
  {productValid.quantity}
    </Form.Text>




  <Form.Group controlId="">
    <Form.Label>Warranty</Form.Label>
    <Form.Control onChange={(e)=>setProduct({...product,warranty:e.target.value})} type="number" placeholder="Warranty" />

    <Form.Text  className="text-danger">
      
    </Form.Text>
    
  </Form.Group>

  <Form.Text  className="text-danger">
  {productValid.warranty}
    </Form.Text>




  <Form.Group controlId="">
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={(e)=>setProduct({...product,description:e.target.value})}  type="text" placeholder="Description" />

    <Form.Text  className="text-danger">
      
    </Form.Text>
    
  </Form.Group>
 
  <Form.Text  className="text-danger">
            {productValid.description}
    </Form.Text>

    

   
  <Form.Group controlId="">
    
  <Button onClick={(e)=>validation(e)}   variant="primary" type="submit">
   Add Product
  </Button>

  </Form.Group>
  

  
</Form>
      
    </div>
  )


  
}



export default AddProduct;