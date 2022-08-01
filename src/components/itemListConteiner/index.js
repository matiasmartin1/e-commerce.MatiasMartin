import ItemCount from "../ItemCount";

export default function ItemListConteiner (props) {
    return (
        <div>
           <p>{props.texto}</p>
           <ItemCount initial={1} stock={5}/>
        </div>
    )
}