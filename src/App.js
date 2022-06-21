import './App.css';
import CohortComponent from './CohortComponent';
import NavComp from './NavComp';
import cohort from "./cohort.json"
import { Switch, Route } from 'react'
import Router1 from './Router1'
import { useState, useEffect } from 'react';

function App() {
 
const [cohort, setCohort] = useState([])

useEffect(() => {
  fetch('http://localhost:4000/students')
  .then(r => r.json())
  .then(data => {
    setCohort(data)
    console.log(data)
})  
}, [])

const [member, setMember] = useState([])
    
function handleClick(member){
    
}

  return (
    <div className="App">
    
    {/* <Switch>
      <Route>
      </Route>
    </Switch> */}
      
      <NavComp />
       <CohortComponent cohort= {cohort} handleClick={handleClick} />
      <Router1 />
      
    </div>
  );
}

export default App;
