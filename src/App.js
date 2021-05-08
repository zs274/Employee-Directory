import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/index.js';
// import Container from './components/Container/index.js';
import Table from './components/Table/index.js';

function App() {
  return (
    <Router>
      <div>
        {/* <Container> */}
          <Jumbotron />
          <Route exact path ="/" component={Table} />
        {/* </Container> */}
      </div>
    </Router>


  );
}

export default App;
