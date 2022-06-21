
import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './App.css';
import CohortComponent from './CohortComponent';
import NavComp from './NavComp';
import cohort from "./cohort.json"
import Router1 from './Router1';
import Router2 from './Router2';
import Router3 from './Router3';


function App() {

  const [page, setPage] = useState("/")
  const [cohort, setCohort] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/students')
      .then(r => r.json())
      .then(data => {
        setCohort(data)
        console.log(data)
      })
  }, [])

  const [memberProfile, setMemberProfile] = useState([])

  function handleClick(cohort) {
    const clickedStutdent = memberProfile.findIndex(student => cohort.id === student.id )
  if (clickedStutdent === -1) {
    setMemberProfile([...memberProfile, cohort])
  }
  }









  return (
    <div className="App">
      <NavComp onChangePage={setPage} />
      <CohortComponent cohort={cohort} handleClick={handleClick} />
      <Switch>
        <Route path="/router1">
          <Router1 />
        </Route>
        <Route path="/router2">
          <Router2 />
        </Route>
        <Route path="/router3">
          <Router3 />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
