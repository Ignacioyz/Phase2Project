import CohortComponent from "./CohortComponent"
import { NavLink } from "react-router-dom"

const NavComp = () =>{
    return(
        <nav>  <h1>Meme Generator</h1><br>
        </br>
        <div>
            <a>Router1</a> <br></br>
            <a>Router2</a> <br></br>
            <a>Router3</a> <br></br>
            {/* <NavLink>Navlink1</NavLink>
            <NavLink>Navlink2</NavLink>
            <NavLink>Navlink3</NavLink> */}
        </div>
        
        </nav>
        
    )
}




export default NavComp