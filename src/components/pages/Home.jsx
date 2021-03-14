import React from "react";
import ItemCard from "../ItemCard";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className={"container"}>
      <div className="display-4 text-center mb-5">Available Products</div>
      <div className={"row ml-4"}>
        {props.products.map((product, index) => (
          <div key={index} className={"col-sm-4  mb-5"}>
            <Link to={"/product-list"} className="text-decoration-none">
              <ItemCard getItems={props.getItems} product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
