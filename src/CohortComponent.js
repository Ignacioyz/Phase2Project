import React, { useState } from "react"
import { Switch, Route } from 'react'


const CohortComponent = ({ cohortProp }) => {
     
    const [member, setMember] = useState([])
    
    function handleClick(member){
       
    }
    
    
    return (
        <div>
            {cohortProp.map(member => {
                return (
                    <div key={member.Name} onClick ={handleClick} id="CohortMembers" > {member.Image} 
                    <br></br>
                     Name: {member.Name} 
                     <br></br> 
                     Place of birth: {member.City} 
                     <br></br> 
                     Favorite Food: {member.FavoriteFood} 
                     <br></br>  
                     Favorite Color: 
                     <br></br> 
                     {member.FavoriteColor}  
                     </div>
                )


            })}
        </div>





    )
}

export default CohortComponent 