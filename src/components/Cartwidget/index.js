import React, {useContext} from "react"
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './index.css'
import { CartContext } from '../../context/CartContext';

function Cart(){
    const { cantInCart } = useContext(CartContext)
    
 
    return (
        
        <div >
            <Link to="/cart">
            <AiOutlineShoppingCart />
            </Link>
            {cantInCart!==0 ? <input className="inputicon" type="text" value={cantInCart} readOnly/> : ""}
            
        </div>
    )
}
 
export default Cart