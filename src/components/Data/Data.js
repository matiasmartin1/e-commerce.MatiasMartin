const Data = [
    {
        id: 0,
        nombre: 'Zapatilla Blanca Polo Label',
        precio: 5.499,
        stock: 3,
        imagen: '../../images/polo-label-1299-397829-1-product.jpg'

    },
    {
        id: 1,
        nombre: 'Zapatilla Azul Prowess',
        precio: 4.574,
        stock: 10,
        imagen: '../../images/prowess-4829-235059-1-product.jpg'
    },
    {
        id: 2,
        nombre: 'Zapatilla Marrón Polo Label',
        precio:5.999,
        stock: 10,
        imagen: '../../images/polo-label-5590-008809-1-product.jpg'

    },
    {
        id: 3,
        nombre: 'Zapatilla Negra Prince',
        precio: 6.490,
        stock: 20,
        imagen: '../../images/prince-1976-931195-1-product.jpg'

    },
    {
        id: 4,
        nombre: 'Zapatilla Negra Prowess',
        precio:  6.312,
        stock: 5,
        imagen: '../../images/prowess-5115-593957-1-product.jpg'
    },
    {
        id: 5,
        nombre: 'Zapatilla Negra Topper Asgard',
        precio: 10.599,
        stock: 10,
        imagen: '../../images/topper-2836-573359-1-product.jpg'

    },
    {
        id: 6,
        nombre: 'Zapatilla Negra Polo Label',
        precio:  5.999,
        stock: 5,
        imagen: '../../images/polo-label-5939-489749-1-product.jpg'

    },
    {
        id: 7,
        nombre: 'Zapatilla Negra Reef Byron Bay',
        precio: 1060,
        stock:  10.339,
        imagen: "../../images/reef-5468-384228-1-product.jpg"

    }
]


const getFetch = new Promise ((resolve, reject)=>{
    let condition=true
    condition ? setTimeout(()=>{resolve(Data)}, 2000) : reject(console.log("error en base de datos"))
})

export default getFetch;