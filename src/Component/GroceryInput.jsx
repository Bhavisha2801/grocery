import React from "react";

const GroceryInput = ({handleAdd}) => {

    const [item , setItem] = React.useState("");
    const [quantity , setQuantity] = React.useState("");

    const handleChange = (e) => {
        setItem(e.target.value)
        console.log(e.target.value)
    }
    const handleChangeqty = (e) => {
        setQuantity(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <input placeholder="Add Items" value={item} onChange={handleChange} /><br /><br />
            <input type="number" placeholder="Add quantity" value={quantity} onChange={handleChangeqty} /><br /><br />
            <button onClick={() => {
            handleAdd(item , quantity)
            setItem("")
            setQuantity("")
            }}>ADD</button>

        </div>
    )
}

export {GroceryInput}