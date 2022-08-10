import { useState, useEffect } from "react";

import { getFetch } from "../Data/Data";
import ItemList from "../ItemList";
import ItemDetailConteiner from "../ItemDetailConteiner";


export default function ItemListConteiner() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp.find(obj => obj.id ===1)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                loading ? <h2>Cargando... </h2> :
                    <ItemList prod={data} />
            }
        </div>
    )
}