import Item from "../Item.js"
import getFetch from "../Data/Data";
import { useState, useEffect } from "react";

export default function ItemList() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setData([resp]))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading ?
                <h3>
                    loading
                </h3>
                :
                data.map((product, i) => {
                    return (
                            <Item key={i} imagen={product.imagen} title={product.nombre} price={product.precio}/> 
                    )
                })
            }
        </>
    )
}