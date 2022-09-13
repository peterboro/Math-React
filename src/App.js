import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalculatorContainer from './components/Calculator';
import Quote from './pages/Quote';
import './components/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<CalculatorContainer />} />
        <Route path="/Quote/" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;