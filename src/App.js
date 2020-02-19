import React from 'react';
import './App.css';
import Joke from './components/Joke'
import Navbar from './components/layouts/Navbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './pages/About';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container mx-auto">
      <Route path="/" exact component={Joke} />
      <Route path="/about" exact component={About} />
      </div>
    </div>
    </Router>
  );
}

export default App;
