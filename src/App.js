import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Beers } from "./components/Beers";
import { BeerForm } from './components/BeerForm';
import { Container } from 'semantic-ui-react';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('/mybeers').then(response => 
      response.json().then(data => {
        setBeers(data.beers);
      })
    );
  }, []);

  return (
    <div className="App" style={{marginTop:40, width: 800}}>
      <Container>
        <Beers beers={beers}/>
        <BeerForm newBeer={beer=> setBeers(currentBeers => [...currentBeers, beer])}/>
      </Container>
    </div>
  );
}

export default App;
