
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
  const getProductID = (ID) =>{
    const index = (Math.floor(ID/1000))-1
    for(let i =0; i<products[index].length;i++){
      
      if(products[index][1][i].id ===  ID){
        setProduct(products[index][1][i])
        
      }
    }
    console.log(product);
  }

  
  


  return (


    <>


     <NavBar />


    <Route path={"/"} exact> <Home getItems={getItems}   products={products}/></Route>
     
    

     <Route path={"/product-list"} exact><ProductList  name={itemsName} items={items} getProductID={getProductID} /></Route>
     
     <Route path={"/product-list/product"} exact><ProductDescription  productDetails={product} /></Route>
     
     

    

       
       
    </>
    
  );
}

export default App;
