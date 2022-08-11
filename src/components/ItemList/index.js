import Item from "../Item.js"

export default function ItemList({ prod }) {

    console.log(prod);
    return (
        <>{
            prod.map(products => <Item key={products.id} producto={products} />)
        }
        </>
    )
}
