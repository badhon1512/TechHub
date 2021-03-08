
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {useState} from 'react'
import Home from './components/pages/Home'
import {productsdata} from './productsdata'
import {Route,Link} from 'react-router-dom'

import ProductList from './components/pages/ProductList'
import ProductDescription from './components/pages/ProductDescription'


function App() {


  const [products,setProducts]=useState(productsdata)

  const [items,setItems]=useState([])
  const [itemsName,setItemsName]=useState('')
  
  const [product,setProduct]=useState('')

  const getItems=(name,data)=>{



    setItems(data)
    setItemsName(name)



  }
  const getProduct = (product) =>{
    setProduct(product)
    console.log(product)
  }

  
  


  return (


    <>


     <NavBar />


    <Route path={"/"} exact> <Home getItems={getItems}   products={products}/></Route>
     
    

     <Route path={"/product-list"} exact><ProductList  name={itemsName} items={items} getProduct={getProduct} /></Route>
     <Route path={"/product-list/product"} exact><ProductDescription  productDetails={product} /></Route>
     
  
     
     

    

       
       
    </>
    
  );
}

export default App;
