import React from 'react'
import NavBar from '../NavBar'
import {Link} from 'react'
import ProductCard from '../ProductCard'
function Home(props) {
  return (
    <div className={" row"} >



      {


        
        props.products.map((product)=>
        <div className={"col-sm-3"}>
          <ProductCard key={product.id} product={product}/>
        </div>

          
        )
      }


      
    </div>
  )
}
export default Home
