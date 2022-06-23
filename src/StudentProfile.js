import React from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"






function StudentProfile() {
// console.log(memberProfile.Name)
const [studentProfile, setStudentProfile] = useState(null)
const { id } = useParams()




useEffect(()=> {
    fetch(`http://localhost:4000/students/${id}`)
    .then(response => response.json())
    .then(data => {
        setStudentProfile(data)
    })
    }, [id])

    if (!studentProfile) return studentProfile

return(
    <div id="student-profile">
        <div id="Student_Profile_Div" key = {studentProfile.id}>
        <img src={studentProfile.Image}></img>
        {studentProfile.Name}<br></br>
        {studentProfile.City}<br></br>
        {studentProfile.FavoriteFood}<br></br>
        {studentProfile.FavoriteColor}<br></br>
        </div>
    </div>

        
    )
}

export default StudentProfile;