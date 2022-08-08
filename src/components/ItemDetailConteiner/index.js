import { useEffect, useState } from "react";
import {getItem} from "../Data/Data";
import ItemDetail from "../ItemDetail";

export default function ItemDetailConteiner() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem()
            .then(product => {
                setProduct(product)
            })
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [])


    return (
        <div>
            {
                loading ? <h2>Cargando... </h2> :
                    <>
                        <ItemDetail stock={product.stock} title={product.nombre} description='lorem' price={product.precio} image={product.image}/>
                    </>
            }
        </div>
    )
}
