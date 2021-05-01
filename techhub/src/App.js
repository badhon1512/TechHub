import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Home from "./components/pages/Home";
import { productsdata } from "./productsdata";
import { Route, Link } from "react-router-dom";
import ShowCartInfo from './components/pages/ShowCartInfo'
import Footer from './components/Footer'

import {useEffect} from 'react'

import ProductList from "./components/pages/ProductList";
import ProductDescription from "./components/pages/ProductDescription";

function App() {
  const [error, setError] = useState(null);
  
  const [products, setProducts] = useState([]);
  



  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product")
      .then(res => res.json())
      .then(
        (result) => {

          let types=[];
         
          //setProducts([...result]);
          result.map((item)=>{
              
             // eslint-disable-next-line no-unused-expressions
             types.indexOf(item.type)===-1 ?
             types.push(item.type) : ''
          })
          let data=[];
          types.map((item)=>{
             
             data.push([]);
          })

          result.map((item)=>{

                data[types.indexOf(item.type)].push(item);
          })

          let productData=[];
          types.map((item,i)=>{
                productData.push([item,data[i]]);
          })


          setProducts(productData);
         

         
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
          setError(error);
        }
      )
  },[])

  

  const [items, setItems] = useState([]);
  const [itemsName, setItemsName] = useState("");
  const [product, setProduct] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const getItemName = (name) => {
   
    setItemsName(name);
  };
  const getProduct = (product) => {
    setProduct(product);
    console.log(product);
  };

  const getcartItems = (item) => {
    let newItems;
    cartItems.length ? (newItems = [...cartItems, item]) : (newItems = [item]);
    setCartItems(newItems);
  };
  //console.log(cartItems);
  return (
    <>
      <NavBar cartItems={cartItems}/>

      <Route path={"/"} exact>
        {" "}
        <Home getItemName={getItemName} products={products} />
      </Route>

      <Route path={"/product-list"} exact>
        <ProductList
          name={itemsName}
          items={items}
          getProduct={getProduct}
          getcartItems={getcartItems}
        />
      </Route>
      <Route path={"/product-list/product"} exact>
        <ProductDescription productDetails={product} />
      </Route>
      <Route path={"/showcartinfo"} exact>
        <ShowCartInfo cartItems={cartItems} />
      </Route>
      <Footer/>
    </>
  );
}

export default App;
