import { useState, useEffect } from "react";

import { getCategory, getFetch } from "../Data/Data";
import ItemList from "../ItemList";
import { useParams  } from 'react-router-dom'


export default function ItemListConteiner() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const {categoryId} = useParams()

    useEffect(() => {
          getFetch
                .then(resp => {
                    if(categoryId) {
                        setData(resp.filter(products => products.categoria === categoryId))
                    }
                    else {
                        setData(resp)
                    }
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }, [categoryId])
    return (
        <div>
            {
                loading ? <h2>Cargando... </h2> :
                    <ItemList prod={data} />
            }
        </div>
    )
}