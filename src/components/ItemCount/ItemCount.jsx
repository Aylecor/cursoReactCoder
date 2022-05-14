import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

function increase() {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    } 
}

function decrease() {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    } 
}

function addToCart() {
    onAdd(quantity);
}

return (
    <div>
        {quantity} <br/>
        <button onClick={decrease} className="btn btn-primary">-</button> 
        <button onClick={increase} className="btn btn-primary">+</button><br/>
        <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button>
    </div>
    )
}

export default ItemCount

