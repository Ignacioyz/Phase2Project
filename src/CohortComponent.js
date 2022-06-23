import React, { useState } from "react"
import { Switch, Route } from 'react'
import StudentProfile from "./StudentProfile"
import NavComp from "./NavComp"
import {NavLink} from "react-router-dom"



const CohortComponent = ({ cohort, handleClick, memberProfile}) => {
     
  return (
        <div>
            {cohort.map(member => {
                return (
                    <div key={member.Name} onClick ={() => handleClick(member)} id="CohortMembers" > 
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

                    <NavLink to={`/StudentProfile/${member.id}`}> {member.Name}</NavLink>
                    
                     </div>
                )


            })}
            <div class="form-group">
             
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

            <button type="button" class="btn btn-outline-success">Add New Student</button>
            </div>
        </div>





    )
}

export default CohortComponent;