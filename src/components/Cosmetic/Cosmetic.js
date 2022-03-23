import React from 'react';
import { removeDb, saveData } from '../../utilities/saveData/Savedata';


const Cosmetic = (props) => {
    const{id, product, price} = props.cosmetic
    const addToCart = id => saveData(id);
    const removeFromCart = id => removeDb(id);
    return (
        <div>
            <h1>Name:{product}</h1>
            <p>price:$ {price}</p>
            <p> id: {id}</p>
            <button onClick={() =>addToCart(id)}> add to cart</button>
            <button onClick={() =>removeFromCart(id)}> remove from cart</button>
        </div>
    );
};

export default Cosmetic;