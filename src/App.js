
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {useState} from 'react'
import Home from './components/pages/Home'
import {productsdata} from './productsdata'
import {Route,Link} from 'react-router-dom'

import ProductList from './components/pages/ProductList'


function App() {


  const [products,setProducts]=useState(productsdata)

  const [items,setItems]=useState([])
  const [itemsName,setItemsName]=useState('')

  const getItems=(name,data)=>{



    setItems(data)
    setItemsName(name)



  }

  ///console.log(itemsName)


  return (


    <>


     <NavBar/>


    <Route path={"/"} exact> <Home getItems={getItems}   products={products}/></Route>
     


     <Route path={"/product-list"}><ProductList  name={itemsName} items={items}/></Route>


       
       
    </>
    
  );
}

export default App;
