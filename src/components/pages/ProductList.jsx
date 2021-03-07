import ProductCard from '../ProductCard'
const ProductList=(props)=>
{




  return(

    <>

    <div className="container">

       <h1   className={"text-center  text-uppercase"}>{props.name}</h1>
      

       <div className={" row  ml-4"} >

     

       {
         props.items.map((item,i)=>
         
           <div style={{textAlign:"center"}} className={"col-sm-4 mb-5"}>
         
            <ProductCard key={i} item={item} getProductID={props.getProductID}/>
           </div>
            
         )
       }
      

</div>

</div>


    </>
  )
}

export default ProductList