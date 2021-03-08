import React, { useState, useEffect } from "react";

export default function ShowCartInfo(props) {
  const [itemQuantity, setitemQuantity] = useState({});

  const incrementitemQuantity = (id) => {
    // let value;
    // itemQuantity.filter((item)=>{
    //  // item[0]===id ? value = item[1] : value =

    // })
    console.log(itemQuantity);
  };

  const decrementitemQuantity = (id) => {};

  useEffect(() => {
    props.cartItems.map((item) => {
      console.log(itemQuantity);
      let value;
      itemQuantity.length
        ? (value = { ...itemQuantity, [item.id]: 1 })
        : (value = { [item.id]: 1 });
      setitemQuantity(value);
      console.log(itemQuantity);
    });
  }, []);
  console.log(itemQuantity);

  return (
    <div className="container" style={{ fontSize: "1.5rem" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item) => (
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
                1
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
