import { useEffect, useState } from "react";
import { getItem} from "../Data/Data";
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

export default function ItemDetailConteiner() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();

    useEffect(()=>{
        const dbDoc = doc(db, 'item', id);
        getDoc(dbDoc)
        .then(res => setData({id:res.id, ...res.data()}))
        .catch(err=>console.log(err))
        .finally(console.log())
        .finally(setLoading(false))
    }, [id]);

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
