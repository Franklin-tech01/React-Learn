import { useEffect, useState } from "react";

const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() =>{
        setItems(getItems())
        console.log("Updating List")
    }, [getItems])



 
    return items.map(item => <div key={item}> {item}</div>)

}

export default List;