import React from 'react'

export default function ProductDescription(props) {
    return (
        <div>
            <div className="container mb-5">
                <img className="ml-5" src={props.productDetails.image} alt=""/>
                <h2>Brand: {props.productDetails.brand}</h2>
                <h3>Model: {props.productDetails.model}</h3>
                <h3>Price: {props.productDetails.price} Tk.</h3>
                <h3>Available Quantity: {props.productDetails.quantity}</h3>
                <h3>Warranty: {props.productDetails.warranty} years</h3>
                <h3>Description: </h3>
                <p>{props.productDetails.description}</p>

            </div>
        </div>
    )
}
