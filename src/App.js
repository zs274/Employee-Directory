import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/index.js';
import Wrapper from './components/Wrapper/index.js';
import DataTable from './components/DataTable/index.js';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Jumbotron />
          <Route exact path ="/" component={DataTable} />
        </Wrapper>
      </div>
    </Router>


  );
}

export default App;
