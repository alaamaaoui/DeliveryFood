import React from 'react'
import './App.scss';
import { NavBar, NavBarItem } from './components/NavBar';
import Historic from './Historic';
import Home from './Home';
import Order from './Order';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {  

  return (
    <Router>
      <div className="App">
        <NavBar>
          <NavBarItem href='/'>
            Home
          </NavBarItem>
          <NavBarItem href='/order'>
            Order
          </NavBarItem>
          <NavBarItem href='/historic'>
            Historic
          </NavBarItem>
        </NavBar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/historic" element={<Historic/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
