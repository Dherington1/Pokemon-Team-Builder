import React, {Component} from 'react';
import CardList  from '../Components/Cards/CardList';
import TeamBuilder from '../Components/TeamBuildContainer/TeamBuilder'
import SearchBox  from '../Components/Search/SearchBox'; 


class Gen2 extends Component {
  
  constructor() {
    super();
    
    // our states we want to change 
    this.state = {
      pokemonArr: [],
      search: ''
    }
  }
  // https://pokeapi.co/api/v2/pokedex/2
  // fetch to pokemon api
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokedex/3')
    // turn response into json
      .then(response => response.json())
      // set our state with the names of the pokemon
      .then((name) => {
        this.setState({pokemonArr: name.pokemon_entries})
      })
  }

    
  // for search bar
  change4Search = (e) =>{
    // change our state to the value in the search bar
    this.setState({search: e.target.value})
  }

  

  // render components
  render() {
    
    // extract variables out of objects
    const {pokemonArr, search} = this.state;

    // filter for pokemon name that includes the value of the search bar 
    const searchFilter = pokemonArr.filter(pokemonCurrent => pokemonCurrent.pokemon_species.name.toLowerCase().includes(search.toLowerCase()))
    
    return (
      <div className="App">
        
        {/* Title */}
        <h1>Pokemon Database</h1>

        {/* Search Box */}
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.change4Search}
        />

        {/* Built Team onClick */}
        <h3>Your Team</h3>
        <TeamBuilder />

        {/* Pokemon Selection */}
        <h3>Choose Your Pokemon</h3>
        <CardList pokemon={searchFilter}></CardList>
       
      </div>
    )
  }
  

}
export default Gen2;