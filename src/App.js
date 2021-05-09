import React from 'react';
import './App.css';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';


function App() {
  return (
      <div className="App">
        <Wrapper>
          <Jumbotron />
          <Main />
        </Wrapper>
      </div>
  );
}

export default App;
