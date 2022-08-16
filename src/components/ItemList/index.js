import Item from "../Item.js"

export default function ItemList({ prod }) {
    return (
        <>{
            prod.map(products => <Item key={products.id} producto={products} />)
        }
        </>
    )
}
