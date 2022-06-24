import React, { useState } from "react"
import { Switch, Route } from 'react'
import { NavLink } from "react-router-dom"
import StudentProfile from "./StudentProfile"


const CohortComponent = ({ cohort, handleClick, memberProfile, }) => {


    function postNewMember(e) {
        e.preventDefault();
        fetch('http://localhost:4000/students', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                ({
                    'Image': e.target.Image.value,
                    'Name': e.target.Name.value,
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
                    <div key={member.Name} id="CohortMembers" >

                        <img src={member.Image}></img>

                        <br></br>

                        <br></br>



                        <NavLink to={`/StudentProfile/${member.id}`}> {member.Name}</NavLink>
                        <br></br> <p id="heart-icon"></p>

                    </div>


                )


            })}

            <div class="form-group">

                <form onSubmit={postNewMember}>
                    {/* <input type="text" name="Name"></input>
                   <input type="text" name="City"></input>
                   <input type="text" name="FavoriteFood"></input>
                   <input type="text" name="FavoriteColor"></input>
                   <input type="text" name="Image"></input>
                   
                   <button type="submit">Add new member</button> */}





                    <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Name</label>
                    <input class="form-control form-control-sm" type="text" name="Name" placeholder="Enter text" id="Name-form" />



                    <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Birthplace</label>
                    <input class="form-control form-control-sm" type="text" name="City" placeholder="Enter text" id="Birthplace-form" />



                    <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Favorite Food</label>
                    <input class="form-control form-control-sm" type="text" name="FavoriteFood" placeholder="Enter text" id="Food-form" />



                    <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Favorite Color</label>
                    <input class="form-control form-control-sm" type="text" name="FavoriteColor" placeholder="Enter text" id="FavColor-form" />


                    <label class="col-form-label col-form-label-sm mt-4" for="inputSmall">Student Image URL</label>
                    <input class="form-control form-control-sm" type="text" name="Image" placeholder="ImageUrl" id="Image-form" />


                    <br></br>
                    <br></br>

                    <button type="submit" class="btn btn-outline-info">Add New Student</button>
                </form>
            </div>

        </div>





    )
}

export default CohortComponent;