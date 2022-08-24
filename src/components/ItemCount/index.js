import {  useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";
import './itemCount.css'

export default function ItemCount({ stock, initial, itemAddToCart, itemData }) {

    const [contador, setContador] = useState(1);
    const [cantStock, setCantStock] = useState(stock);

    const { addItem } = useContext(CartContext)
    const itemDataCount = {
        ...itemData,
        contador
    }

    useEffect(()=>{
        setCantStock(stock)
      },[stock])
    
      function sumarAlContador() {
        if (cantStock > 1) {
          setContador(contador + 1);
          setCantStock(cantStock - 1);
        }
      }
      function restarAlContador() {
        if (contador > 1) {
          setContador(contador - 1);
          setCantStock(cantStock + 1);
        }
      }
      function onAdd() {
        if (contador >= 1) {
          setCantStock(cantStock - contador);
          setCantStock(cantStock);
          itemAddToCart();
        }
      }


    return (
        <div>
            <div className="itemCountButtons">
                    <button type="button" className="btn btn-outline-primary" onClick={restarAlContador}>-</button>
                    <p>{contador}</p>
                    <button type="button" className="btn btn-outline-primary" onClick={sumarAlContador}>+</button>
            </div>
            <button className="btn btn-outline-primary" type='button' onClick={()=>{
            onAdd();
            addItem({...itemDataCount})
          }}
          >Agregar al carrito</button>
        </div>
    )
} 