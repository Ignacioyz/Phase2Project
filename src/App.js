import './App.css';
import CohortComponent from './CohortComponent';
import NavComp from './NavComp';
import cohort from "./cohort.json"
import { Switch, Route } from 'react'
import Router1 from './Router1'


function App() {
  
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
