import CohortComponent from "./CohortComponent"
import { NavLink } from "react-router-dom"

function NavComp({ onChangePage }) {
    
    function handleLinkClick(e){
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return(
        <nav>  
            <h1>051622</h1>
        <div>
            
            <NavLink exact to="/">Home</NavLink><br></br>
            <NavLink to="/router2">About</NavLink><br></br>
            <NavLink to="/router3">Search</NavLink> 
            
            {/* <NavLink>Navlink1</NavLink>
            <NavLink>Navlink2</NavLink>
            <NavLink>Navlink3</NavLink> */}
            
        </div>
        
        </nav>
        
    );
}


export default NavComp;