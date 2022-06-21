import './App.css';
import {React, useState, useEffect} from "react"
import CohortComponent from './CohortComponent';
import NavComp from './NavComp';
import cohort from "./cohort.json"
import Router1 from './Router1';
import Router2 from './StudentProfile';
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
    
    {/* <Switch>
      <Route>
      </Route>
    </Switch> */}
      
      <NavComp />
       <CohortComponent cohortProp={cohort} />
      <Router1 />
      
    </div>
  );
}

export default App;
