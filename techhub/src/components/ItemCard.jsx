import React from "react";
import "../style/ProductCart.module.css";

const ItemCard = (props) => {
  return (
    <>
      <div
        className="shadow-sm"
        onClick={() => props.getItems(props.product[0], props.product[1])}
        style={{
          width: "18rem",
          textAlign: "center",
          backgroundColor: "rgb(222, 222, 222)",
          padding: 10,
        }}
      >
        <img
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          src={props.product[1][0].image}
          alt=""
        />
        <br />
        <h3>{props.product[0]}</h3>
        <p>Models available : {props.product[1].length}</p>
      </div>
    </>
  );
};

export default ItemCard;
