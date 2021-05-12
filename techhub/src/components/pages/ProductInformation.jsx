import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useEffect,useState}  from 'react'

const ProductInformation=(props)=>{

  const [products,setProducts]=useState([]);



  function filterProduct(e){

   

    
////// ???????
   //// setProducts(props.products)

       setProducts(props.products)

      if(e.target.value!=="All"){

      let filterProducts=[];

      filterProducts=props.products.filter((product)=>
           
        // eslint-disable-next-line no-unused-expressions
        product.type===e.target.value
      )
      setProducts(filterProducts);
      
    }

    console.log(products)
    
  }

  
  useEffect(()=>{

    setProducts(props.products);


  },[])

  




  let history=useHistory();

  return(

    <div>


      <select onChange={(e)=>filterProduct(e)} name="" id="">
        <option >All</option>
        <option value="Laptop">Laptop</option>
        <option value="Monitor">Monitor</option>
        <option value="Camera">Camera</option>
       
      </select>

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
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {

      products.map((product,index)=>{

        return(
      <tr key={index}>   
      <td>{product.id}</td>
      <td>{product.brand}</td>
      <td>{product.model}</td>
      <td>{product.price}</td>

      <td>{product.quantity}</td>
      <td>{product.warranty}</td>

      <td>{product.type}</td>

      <td><button onClick={(e)=>{
        props.getProduct(product)
        history.push('/product-list/'+product.id)
      }}>See details</button></td>

      
      
    </tr>)
      })
    
}
    
  </tbody>
</Table>


      
    

    
    </div>
  )
}

export default ProductInformation;