import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home';
import Activities from './pages/Activities';
import Features from './components/Features';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<SignUp/>}/>
        <Route exact path="/activities" element={<Activities/>}/>
        <Route exact path="/Features" element={<Features/>}/>
        <Route exact path="/AboutUs" element={<AboutUs/>}/>
        <Route exact path="/signIn" element={<SignIn/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
