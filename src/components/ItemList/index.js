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
                data.map((product) => {
                    console.log(product)
                    return (
                        product.map((prod, i) => {
                            return (
                                <Item key={prod.id} image={prod.imagen} title={prod.nombre} price={prod.precio} />
                            )
                        })
                    )
                }
                )
            }
        </>
    )
}
