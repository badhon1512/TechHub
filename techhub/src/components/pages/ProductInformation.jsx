
import {Table} from 'react-bootstrap'

const ProductInformation=(props)=>{

  return(

    <div>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Warranty</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    {

      props.products.map((product,index)=>{

        return(
      <tr key={index}>   
      <td>{product.id}</td>
      <td>{product.brand}</td>
      <td>{product.model}</td>
      <td>{product.price}</td>

      <td>{product.quentity}</td>
      <td>{product.warranty}</td>

      <td>{product.type}</td>
      
      
    </tr>)
      })
    
}
    
  </tbody>
</Table>


      
    

     {
       props.products.map((product,index)=>
           <div key={index}>{product.id}</div>

       )
     }
    </div>
  )
}

export default ProductInformation;