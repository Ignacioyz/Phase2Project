import React, { useState } from "react"
import { Switch, Route } from 'react'
import { NavLink } from "react-router-dom"
import StudentProfile from "./StudentProfile"


const CohortComponent = ({ cohort, handleClick, memberProfile, }) => {


    function postNewMember(e) {
        fetch('http://localhost:4000/students', {
            method: 'POST',
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(
                ({
                    'Image': e.target.Image.value,
                    'Name':e.target.Name.value,
                    'City':e.target.City.value,
                    'FavoriteFood':e.target.FavoriteFood.value,
                    'FavoriteColor':e.target.FavoriteColor.value,

                })
            )
        })

    }

    return (
        <div>
            {cohort.map(member => {
                return (
                    <div key={member.Name} onClick={() => handleClick(member)} id="CohortMembers" >

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