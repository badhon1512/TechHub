import React from 'react'
import NavBar from '../NavBar'

import ItemCard from '../ItemCard'
import {Link} from 'react-router-dom'
import {v4 as k } from 'uuid'

function Home(props) {
  return (

    <div className={"container"}>
    <div className={"row"} >



      {


        
        props.products.map((product,index)=>
        <div className={"col-sm-3 mr-5"}>
        <Link to={"/product-list"}><ItemCard getItems={props.getItems}  product={product}/></Link>  
        </div>

          
        )
      }


      
    </div>
    </div>
  )
}
export default Home
