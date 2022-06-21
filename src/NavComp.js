import CohortComponent from "./CohortComponent"
import { NavLink } from "react-router-dom"

const NavComp = () =>{
    return(
        <nav>  <h1>Meme Generator</h1><br>
        </br>
        <div>
            
            <NavLink exact to="/">Home</NavLink><br></br>
            <NavLink to="/studentprofile">StudentProfile</NavLink><br></br>
            <NavLink to="/router3">Search</NavLink> 
            
        </div>
        
        </nav>
        
    )
}




export default NavComp