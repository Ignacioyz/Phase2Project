import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
 
function StudentProfile({ }) {
   
    const [studentProfile, setStudentProfile]= useState(false)
    const { id } = useParams()
    
    
    
    useEffect(() => {
        fetch(`http://localhost:4000/students/${id}`)
        .then(r => r.json())
        .then(data => {
            setStudentProfile(data)
            console.log(data)
        })
    }, [id])

    if (!studentProfile) return studentProfile

    return(
       
       <div id="student-profile">
            
            <div id="Student_Profile_Div" key = {studentProfile.id}> 
            <img id="profile-image" src={studentProfile.Image} ></img> <br></br>
            NAME: {studentProfile.Name} <br></br>
            ORIGIN: {studentProfile.City} <br></br>
            FAV FOOD: {studentProfile.FavoriteFood} <br></br>
            FAV COLOR: {studentProfile.FavoriteColor} <br></br>
           </div> 
          
        </div>
  
    );
}

export default StudentProfile