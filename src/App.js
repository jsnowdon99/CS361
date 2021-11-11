import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Beers } from "./components/Beers";
import { BeerForm } from './components/BeerForm';
import { Container } from 'semantic-ui-react';
import LoginPage from './components/LoginPage';

import BeerPage from './components/BeerPage';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return(
    <div className="wrapper">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <LoginPage />}/>
          <Route exact path="/beers" element={ <BeerPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;