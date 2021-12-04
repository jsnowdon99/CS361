// import './App.css';
import { useEffect, useState } from 'react';
import { Beers } from "../components/Beers";
import { BeerForm } from '../components/BeerForm';
import { Container, Header, Image } from 'semantic-ui-react';
import Generic from '../generic.jpg'

export default function BeerPage() {
  
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('/mybeers').then(response => 
      response.json().then(data => {
        setBeers(data.beers);
      })
    );
  }, []);

  return (
    <div id="parent">
      <Header as="h1" textAlign='center' style={{marginTop:40}}>My Beers</Header >
      <div class="row" className="App" style={{marginTop:40, display: 'flex', justifyContent: 'center'}}>
        <Container class="col-lg-1 col-centered">
          <Beers beers={beers}/>
          <BeerForm newBeer={beer=> setBeers(currentBeers => [...currentBeers, beer])}/>
        </Container>
      </div>
    </div>
  );
}