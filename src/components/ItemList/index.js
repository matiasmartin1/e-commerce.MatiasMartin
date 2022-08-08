import Item from "../Item.js"

export default function ItemList({ prod }) {
    return (
        <>{
            prod.map(data => <Item key={data.id} image={data.imagen} title={data.nombre} price={data.precio} />
            )
        }
        </>
    )
}
