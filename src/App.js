import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Home from "./components/pages/Home";
import { productsdata } from "./productsdata";
import { Route, Link } from "react-router-dom";
import ShowCartInfo from './components/pages/ShowCartInfo'

import ProductList from "./components/pages/ProductList";
import ProductDescription from "./components/pages/ProductDescription";

function App() {
  const [products, setProducts] = useState(productsdata);

  const [items, setItems] = useState([]);
  const [itemsName, setItemsName] = useState("");
  const [product, setProduct] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const getItems = (name, data) => {
    setItems(data);
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
      <NavBar cartItems={cartItems} />

      <Route path={"/"} exact>
        {" "}
        <Home getItems={getItems} products={products} />
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
    </>
  );
}

export default App;
