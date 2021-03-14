/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";

export default function ShowCartInfo(props) {
  const [itemQuantity, setItemQuantity] = useState([{}]);

  let totalPrice = 0;
  itemQuantity.map((item) => (totalPrice += item.price * item.quantity));

  const incrementitemQuantity = (id) => {
    // let value;
    // itemQuantity.filter((item)=>{
    //  // item[0]===id ? value = item[1] : value =

    // })
    let update = itemQuantity.map((item) => {
      if (item.id === id && item.quantity < item.totalQuantity) {
        item.quantity++;
      }
      //console.log("iteminc",item)
      return item;
    });
    setItemQuantity(update);
    // console.log("inc",itemQuantity);
  };

  const decrementitemQuantity = (id) => {
    let update = itemQuantity.map((item) => {
      if (item.id === id && item.quantity !== 0) {
        item.quantity--;
      }
      //console.log("iteminc",item)
      return item;
    });
    setItemQuantity(update);
  };

  useEffect(() => {
    let newItems = props.cartItems.map((item) => {
      let update = {
        id: item.id,
        model: item.model,
        image: item.image,
        price: item.price,
        quantity: 1,
        totalQuantity: item.quantity,
      };

      return update;

      //value=[...value,[id]=1]
    });

    setItemQuantity(newItems);
  }, []);

  return (
    <div className="container" style={{ fontSize: "1.5rem"}}>
      <div className="display-4 text-center mb-5">Shopping Cart</div>
      <table className="table table-striped">
        <thead>
          <tr className="bg-primary text-white">
            <th scope="col">Model</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {itemQuantity.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.model}</th>
              <td>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <span className="mr-2">
                  <button
                    className="btn btn-warning btn-sm"
                    style={{ color: "white" }}
                    onClick={() => {
                      decrementitemQuantity(item.id);
                    }}
                  >
                    -
                  </button>
                </span>
                {item.quantity}
                <span className="ml-2">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      incrementitemQuantity(item.id);
                    }}
                  >
                    +
                  </button>
                </span>
              </td>

              <td>{item.price}</td>

              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="bg-warning text-center">
        <tr className="row p-2">
          <td className="col-sm-8">Total Price</td>
          <td className="col-sm-2">{totalPrice} Tk</td>
        </tr>
      </h3>
    </div>
  );
}
