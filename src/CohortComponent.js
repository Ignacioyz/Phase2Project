import React, { useState } from "react"
import { Switch, Route } from 'react'


const CohortComponent = ({ cohort, handleClick }) => {
     
  {cohort.map(member => {
    return 
  })}
    
    
    return (
        <div>
            {cohort.map(member => {
                return (
                    <div key={member.Name} onClick ={handleClick} id="CohortMembers" > 
                    <img src={member.Image}></img>
                    <br></br>
                     Name: {member.Name} 
                     <br></br>
                     {/* Place of birth: {member.City} 
                     <br></br> 
                     Favorite Food: {member.FavoriteFood} 
                     <br></br>  
                     Favorite Color: 
                     <br></br> 
                     {member.FavoriteColor}   */}
                     </div>
                )


            })}
        </div>





    )
}

export default CohortComponent 