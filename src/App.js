
import { Switch, Route } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import CohortComponent from './CohortComponent';
import NavComp from './NavComp';
import cohort from "./cohort.json"
import Router1 from './Router1';
import Router2 from './Router2';
import Router3 from './Router3';



function App() {
  const [page, setPage] = useState("/")
  
  return (
    <div className="App">
    <NavComp onChangePage={setPage} />
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
