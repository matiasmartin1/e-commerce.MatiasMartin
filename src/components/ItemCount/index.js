import { useState } from "react";
import './itemCount.css'

export default function ItemCount({ stock, initial, itemAddToCart }) {

    const [contador, setContador] = useState(initial);

    const onAdd = () => {
        console.log(`${contador} agregados al carrito!`);
        itemAddToCart(contador);
    }

    function sumarAlContador() {
        if (contador === stock) {
            console.log('Maxima cantidad del producto');
        } else {
            setContador(contador + 1);
        }
    }

    function restarAlContador() {
        if (contador <= initial) {
            console.log('No puede ser menos de 1')
        } else {
            setContador(contador - 1);
        }
    }
    return (
        <div>
            <div className="itemCountButtons">
                    <button type="button" className="btn btn-outline-primary" onClick={restarAlContador}>-</button>
                    <p>{contador}</p>
                    <button type="button" className="btn btn-outline-primary" onClick={sumarAlContador}>+</button>
            </div>
            <button className="btn btn-outline-primary" type='button' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
} 