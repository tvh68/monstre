import React, { Component } from 'react';
//import logo from './logo.svg';
import {FicheList} from './components/fiche-list/fiche-list.component'
import { ZoneRecherche } from "./components/zoneRecherche/zone-recherche.component" ;
import './App.css';

// fonction initiale de react
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
class App extends Component{
  constructor () {
    super ()

    this.state = {
      monstres: [],
      champsRecherche: ''
    }
  }

  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monstres: users}))
  }

  render() {

    const monstres= this.state.monstres
    const champsRecherche = this.state.champsRecherche
    // OU (Idem) const { monstres, champsRecherche } = this.state

    const monstresFiltre = monstres.filter(monstre => 
      monstre.name.toLowerCase().includes(champsRecherche.toLowerCase())

    )
    return (

      <div className="App">
        <h1>Monstres carrousel</h1>
        <ZoneRecherche placeholder="Cherche monstres"
          gererChangement = {e => 
            this.setState({ champsRecherche: e.target.value })
          }
        />
      
        <FicheList monstres={monstresFiltre}/>
      </div>
    )
  }
}

export default App;
