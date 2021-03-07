import React from 'react'

export default function ProductDescription(props) {
    return (
        <div>
            {console.log(props.productDetails.model)}
            {props.productDetails.model}
        </div>
    )
}
