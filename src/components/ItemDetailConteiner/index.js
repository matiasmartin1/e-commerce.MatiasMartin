import { useEffect, useState } from "react";
import {getItem} from "../Data/Data";
import ItemDetail from "../ItemDetail";

export default function ItemDetailConteiner() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem()
            .then(product => {
                setData(product)
            })
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [])


    return (
        <div>
            {
                loading ? <h2>Cargando... </h2> :
                    <>
                        <ItemDetail product={data}/>
                    </>
            }
        </div>
    )
}
