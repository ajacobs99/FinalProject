import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu'; 
import Hero from './Hero/Hero'; 
import HomePage from './HomePage/HomePage'; 
import Footer from './Footer/Footer'; 
import AboutPage from './AboutPage/AboutPage'; 
import BudgetPage from './BudgetPage/BudgetPage'; 


function App() {
  return (
    <Router>
     <Menu/>
     <Hero/>
     <div className="mainContainer">
       <Switch>
         <Route path="/about"> <AboutPage/></Route>
         <Route path="/budget"> <BudgetPage/></Route>
         <Route path="/"> <HomePage/></Route>
       </Switch>
     </div>
     {/* <HomePage/> */}
     <Footer/>
    </Router>
  );
}

export default App;
