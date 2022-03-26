import React from "react";

const GroceryList = ({item , quantity , handleDelete , id}) => {
    return (
        <div>
            <h1>{item}</h1>
            <h1>{quantity}</h1>
            <button onClick={() => handleDelete(id)} >Delete Item</button>
        </div>
    )
}

export {GroceryList}