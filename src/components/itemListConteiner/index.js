import ItemCount from "../ItemCount";
import ItemList from "../ItemList";

export default function ItemListConteiner (props) {
    return (
        <div>
            <ItemList />
            <ItemCount initial={1} stock={5}/>
        </div>
    )
}