import React from 'react';
import "./Tshirt.css"

const Tshirt = ({tshirt, handleBuyNow}) => {
    const { _id, name, price, picture} = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button
                onClick={()=> handleBuyNow(_id)}
            >Buy Now</button>
        </div>
    );
};

export default Tshirt;