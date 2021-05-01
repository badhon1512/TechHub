import React from "react";
import ItemCard from "../ItemCard";
import { Link } from "react-router-dom";
import {useState}  from 'react';

function Home(props) {

  const [productIype,setProductType]=useState([{name:'Laptop',modelAvailable:20},{name:'Monitor',modelAvailable:10},{name:'CPU',modelAvailable:30}]);

  return (
    <div className={"container"}>
      <div className="display-4 text-center mb-5">Available Products</div>
      <div className={"row ml-4"}>
        {props.products.map((product, index) => (
          <div key={index} className={"col-sm-4  mb-5"}>
            <Link to={"/product-list"} className="text-decoration-none">
              <ItemCard getItemName={props.getItemName} product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
