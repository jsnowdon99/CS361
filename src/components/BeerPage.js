// import './App.css';
import { useEffect, useState } from 'react';
import { Beers } from "../components/Beers";
import { BeerForm } from '../components/BeerForm';
import { Container } from 'semantic-ui-react';

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
      <div class="row justify-content-md-center" style={{marginTop:40}}>
        <Container class="col-md-auto">
            <h1 style= {{font: "900 45px Montserrat"}} >Welcome to the Beer Ratings Platform</h1>
            <h1>Enter your email:</h1>
        </Container>
      </div>
      <div class="row" className="App" style={{marginTop:40, display: 'flex', justifyContent: 'center'}}>
        <Container class="col-lg-1 col-centered">
          <Beers beers={beers}/>
          <BeerForm newBeer={beer=> setBeers(currentBeers => [...currentBeers, beer])}/>
        </Container>
      </div>
    </div>
  );
}