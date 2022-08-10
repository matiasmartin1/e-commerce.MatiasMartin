import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount";
import Item from "../Item.js";

export default function ItemDetail(product) {
    return (
     <div>
        <Item producto={product} description='lorem'/>
     </div>
    );
}