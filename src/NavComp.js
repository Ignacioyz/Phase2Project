import CohortComponent from "./CohortComponent"
import { NavLink } from "react-router-dom"

function NavComp({ onChangePage }) {
    
    function handleLinkClick(e){
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return(
        <nav>  <h1>Flatiron Virtual Yearbook</h1><br>
       
        </br>
        
        <div>
            
            <NavLink exact to="/">Home</NavLink><br></br>
            <NavLink to="/router3">Cohort MVCs </NavLink> 
            
        </div>
        <h1>
           
        </h1>
        </nav>
        
    );
}


export default NavComp;