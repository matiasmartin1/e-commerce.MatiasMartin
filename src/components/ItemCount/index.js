import { useState } from "react";
import './itemCount.css'

export default function ItemCount(props) {

    const [contador, setContador] = useState(props.initial);

    function sumarAlContador() {
        if (contador === props.stock) {
            console.log('Maxima cantidad del producto');
        } else {
            setContador(contador + 1);
        }
    }

    function restarAlContador() {
        if (contador <= props.initial) {
            console.log('No puede ser menos de 1')
        } else {
            setContador(contador - 1);
        }

    }

    function onAdd() {
        console.log('Agregado al carrito');
    }

    return (
        <div>
            <p>Nombre del producto</p>
            <div className="itemCountButtons">

                    <button type="button" className="btn btn-outline-primary" onClick={restarAlContador}>-</button>
                    <p>{contador}</p>
                    <button type="button" className="btn btn-outline-primary" onClick={sumarAlContador}>+</button>
            </div>
            <button className="btn btn-outline-primary" type='submit' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
} 