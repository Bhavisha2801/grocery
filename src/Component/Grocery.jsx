import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from 'uuid';

const Grocery = () => {

    const [data , setData] = React.useState([]);
    const [showAll , setShowAll] = React.useState(true)

    const handleAdd = (item , quantity) => {
        const payload = {
            item,
            quantity,
            status : false,
            id : uuid()
        }
        setData([...data,payload])
    }

    const handleDelete = (id) => {
        const updateddata = data.filter((item) => item.id !== id)
        setData(updateddata)
    }


    return (
        <div>
            <GroceryInput handleAdd={handleAdd} />

            {
            data
            // .filter((item) => (showAll ? true : !item.status))
            .map((item) => (<GroceryList {...item} key={item.id} handleDelete={handleDelete} />))
            }
        </div>
    )
}

export { Grocery }