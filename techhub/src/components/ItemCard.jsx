import React from "react";
import "../style/ProductCart.module.css";

const ItemCard = (props) => {
  console.log(props);
  return (
    <>
      <div
        className="shadow-sm"
        onClick={() => props.getItemName(props.product[0])}
        style={{
          width: "18rem",
          textAlign: "center",
          backgroundColor: "rgb(222, 222, 222)",
          padding: 10,
        }}
      >
        <img
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          src={'http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'}
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
