import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar(){

    return(
        <>
        <div className="navbar">
           <h2><Link to="/search" className="link">Search</Link></h2>  
           <h2><Link to="/" className="link">List</Link></h2>  
           <h2><Link to="/bookmark" className="link">Bookmark</Link></h2>  
         
        </div>
        </>
    )
}
export {Navbar}