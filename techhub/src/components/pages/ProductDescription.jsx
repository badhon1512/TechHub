import React from 'react'

export default function ProductDescription(props) {

    var user=JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <div className="container mb-5 pb-5">
                <img className="ml-5" src={props.productDetails.image} alt=""/>
                <p style={{fontSize: "2.3rem"}}>Brand: {props.productDetails.brand}</p>
                <p style={{fontSize: "2rem"}}>Model: {props.productDetails.model}</p>
                <p style={{fontSize: "2rem"}}>Price: {props.productDetails.price} Tk.</p>
                <p style={{fontSize: "2rem"}}>Available Quantity: {props.productDetails.quantity}</p>
                <p style={{fontSize: "2rem"}}>Warranty: {props.productDetails.warranty} years</p>
                <p style={{fontSize: "2rem"}}>Description: </p>
                <p style={{fontSize: "1.2rem"}}>{props.productDetails.description}</p>
                


                {
                     
                   
                    user.type=="admin" ? 
                    <div>

                        <button>Update Information</button>
                        <button>Delete Information</button>

                    </div> : ''
                }
            </div>
        </div>
    )
}
