import { Link } from "react-router-dom"
import './index.css'

function NotFound (){
    return (
        <div className="error">
            <h2 > Esta ruta no existe</h2>
            <Link to='/'>Home</Link>
         </div>
    )
}

export default NotFound