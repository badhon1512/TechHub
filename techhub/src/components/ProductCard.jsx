import { Link } from "react-router-dom";
import React from "react";
import "../style/ProductCart.module.css";

const ProductCard = (props) => {
  return (
    <>
      {/*<div className="shadow" style={{width: "18rem", textAlign:'center', backgroundColor:"rgb(242, 240, 240)",padding:10 }} > */}
      <div
        className="shadow-sm"
        style={{
          width: "18rem",
          textAlign: "center",
          backgroundColor: "rgb(222, 222, 222)",
          padding: 10,
        }}
      >
        <img
          style={{ borderRadius: "50%", height: "100px", width: "100px" }}
          src={props.item.image}
          alt=""
        />

        <br />
        <h3></h3>
        <h4>{props.item.brand} </h4>
        <h6>{props.item.model} </h6>
        <h6>Price : {props.item.price} tk </h6>
        <Link
          to={"/product-list/product"}
          className="text-decoration-none"
          onClick={() => {
            props.getProduct(props.item);
          }}
        >
          See Details
        </Link>
        <div>
          {props.item.quantity ? (
            <div>
              <div
                className={"bg-primary mr-5 ml-5 text-light"}
                style={{
                  fontWeight: 600,
                  padding: "0.3rem",
                  marginTop: "1.2rem",
                }}
              >
                In Stock
              </div>
              <br />
              <button
                className="btn btn-primary m-2"
                onClick={() => {
                  props.getcartItems(props.item);
                }}
              >
                <img
                  style={{ height: "1rem", width: "1rem" }}
                  src="./assets/cart.svg"
                  alt=""
                />{" "}
                Add to cart
              </button>
            </div>
          ) : (
            <div>
              <div
                className={"bg-warning mr-5 ml-5 text-dark"}
                style={{
                  fontWeight: 600,
                  padding: "0.3rem",
                  marginTop: "1.2rem",
                }}
              >
                Out of Stock
              </div>
              <br />
              <button className="btn btn-primary m-2" disabled>
                <img
                  style={{ height: "1rem", width: "1rem" }}
                  src="./assets/cart.svg"
                  alt=""
                />{" "}
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
