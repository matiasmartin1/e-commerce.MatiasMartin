import { useEffect, useState } from "react";
import {getFetch, getItem} from "../Data/Data";
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom'

export default function ItemDetailConteiner() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        getFetch
            .then(resp => {
                console.log(resp);
                if(id){
                    setData(resp.filter(product => product.id === id))
                }
                else {
                    setData(resp)
                }
            })
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [id])

    console.log(data);
    return (
        <div>
            {
                loading ? <h2>Cargando... </h2> :
                    <>
                        <ItemDetail producto={data}/>
                    </>
            }
        </div>
    )
}
