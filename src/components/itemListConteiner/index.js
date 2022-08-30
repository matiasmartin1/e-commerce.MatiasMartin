import { useState, useEffect } from "react";

import ItemList from "../ItemList";
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../../Firebase/FirebaseConfig";


export default function ItemListConteiner() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const categoryId = !isNaN(id) && +id;
  
      useEffect(()=>{
  
        const coleRef = collection(DB, "item");
       
        if(categoryId){
          const  colFilterRef = query(coleRef, where('categoria', '==', categoryId))
          getDocs(colFilterRef)
          .then(res=> setData(res.docs.map(res => ({id: res.id, ...res.data()})))
          )}else{
            getDocs(coleRef)
            .then(res=> setData(res.docs.map(res => ({id: res.id, ...res.data()})))
            )
            .finally(setLoading(false))
          };  
        
      },[categoryId]);
    return (
        <Container>
            <Row>
            {
                loading ? <h2>Cargando... </h2> :
                    <ItemList prod={data}  />
            }
            </Row>
        </Container>
    )
}