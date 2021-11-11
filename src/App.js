import './App.css';
import LoginPage from './components/LoginPage';

import BeerPage from './components/BeerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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