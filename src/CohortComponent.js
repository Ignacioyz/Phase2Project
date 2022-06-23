import React, { useState } from "react"
import { Switch, Route } from 'react'
import { NavLink } from "react-router-dom"
import StudentProfile from "./StudentProfile"


const CohortComponent = ({ cohort, handleClick, memberProfile, }) => {
     
    function postNewMember(e){
    fetch('http://localhost:4000/students', {
        method: 'POST',
        headers: {
            'Accept':'application/json',
            
            'Content-Type':'application/json'
        },
        
        body: JSON.stringify(
            ({
                'Image': e.target.Image.value,
                'Name': e.target.Name,
                'City': e.target.City.value,
                'FavoriteFood': e.target.FavoriteFood.value,
                'FavoriteColor': e.target.FavoriteColor.value,
            })

        )
    })
}
    
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
            
            <div class="form-group">
           
             <form onSubmit={postNewMember}> 
             <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Name</label>
            <input class="form-control form-control-sm" type="text" name= "Name" placeholder="Enter text" id="Name-form"/>
           

            
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Birthplace</label>
            <input class="form-control form-control-sm" type="text" name="City" placeholder="Enter text" id="Birthplace-form"/>
           

            
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Favorite Food</label>
            <input class="form-control form-control-sm"type="text" name= "FavoriteFood" placeholder="Enter text" id="Food-form"/>
           

            
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Favorite Color</label>
            <input class="form-control form-control-sm" type="text" name="FavoriteColor" placeholder="Enter text" id="FavColor-form"/>

            
            <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Student Image URL</label>
            <input class="form-control form-control-sm" type="text" name="FavoriteColor" placeholder="ImageUrl" id="Image-form"/>

            
            <br></br>
            <br></br>

            <button type="submit" class="btn btn-outline-info">Add New Student</button>
        </form>
            </div> 
        </div>





    )
}

export default CohortComponent;