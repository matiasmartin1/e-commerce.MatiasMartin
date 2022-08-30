import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { DB } from "../../Firebase/FirebaseConfig";

export default function ItemDetailConteiner() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();

    useEffect(()=>{
        const queryDatabase = getFirestore ()
        const queryDoc = doc(queryDatabase, 'item', id)
        getDoc(queryDoc)
        .then(res => setData({id:res.id, ...res.data()}))
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
