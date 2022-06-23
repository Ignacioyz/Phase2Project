import React, { useState } from "react"
import { Switch, Route } from 'react'
import { NavLink } from "react-router-dom"
import StudentProfile from "./StudentProfile"


const CohortComponent = ({ cohort, handleClick, memberProfile, }) => {
     
    
    return (
        <div>
            {cohort.map(member => {     
                return (
                    <div key={member.Name} onClick={() => handleClick(member) } id="CohortMembers" > 
                   
                    <img src={member.Image}></img>
                    <br></br>
                    
                     <br></br>
                     {/* Place of birth: {member.City} 
                     <br></br> 
                     Favorite Food: {member.FavoriteFood} 
                     <br></br>  
                     Favorite Color: 
                     <br></br> 
                     {member.FavoriteColor}   */}
                     
                     
                    <NavLink to={`/StudentProfile/${member.id}`}> {member.Name} </NavLink>
                     </div>
                
                
                )


            })}
        </div>





    )
}

export default CohortComponent 