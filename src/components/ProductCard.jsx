import {Link} from 'react-router-dom'
import React from 'react'
import '../style/ProductCart.module.css'

const ProductCard=(props)=>{



  return(
  <>

<div style={{width: "18rem" }} >



  <img  style={{borderRadius: "50%", height:"100px", width:"100px" }}  src="./assets/download.jpg" alt=""/>

  <br/>
 

 <button ><Link>Go</Link></button>
    
   
  
</div>




  </>
  )


}

export default ProductCard;