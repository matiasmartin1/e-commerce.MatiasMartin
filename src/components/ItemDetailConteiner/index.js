import { useEffect, useState } from "react";
import { getItem} from "../Data/Data";
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom'

export default function ItemDetailConteiner() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();

    useEffect(() => {
        getItem(id)
            .then(resp => {
                if(id){
                    setData(resp)
                }
                else {
                   console.log('Este producto no existe');
                }
            })
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }, [id])
    return (
        <div>
            {
                loading ? <h2>Cargando... </h2> :
                    <>
                        <ItemDetail {...data}/>
                    </>
            }
        </div>
    )
}
