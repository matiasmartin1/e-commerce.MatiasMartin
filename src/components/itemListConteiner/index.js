import { useState, useEffect } from "react";

import { getCategory, getFetch } from "../Data/Data";
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom'


export default function ItemListConteiner() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(() => {
        getCategory(categoryId)
            .then(resp => {
                console.log(resp);
                if(categoryId){
                    setData(resp)
                }
                else {
                    getFetch
                        .then(resp => setData(resp))
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