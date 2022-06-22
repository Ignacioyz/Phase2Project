
import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './App.css';
import CohortComponent from './CohortComponent';
import NavComp from './NavComp';
import Router3 from './Router3';
import StudentProfile from './StudentProfile';


function App() {

  const [page, setPage] = useState("/")
  const [cohort, setCohort] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/students')
      .then(r => r.json())
      .then(data => {
        setCohort(data)
        // console.log(data)
      })
  }, [])

  const [memberProfile, setMemberProfile] = useState({})

  function handleClick(member) {
    setMemberProfile(member)

  }

  console.log(memberProfile)




  return (
    <div className="App">
      <NavComp onChangePage={setPage} />
      
      <Switch>
       
        <Route path="/studentprofile/:id">
          <StudentProfile />
        </Route>
        <Route path="/router3">
          <Router3 />
        </Route>
        <Route path="/">
        <CohortComponent memberProfile={memberProfile} cohort={cohort} 
        handleClick={handleClick} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
