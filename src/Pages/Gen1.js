import React, {Component} from 'react';
import CardList  from '../Components/Cards/CardList';
import TeamBuilder from '../Components/TeamBuildContainer/TeamBuilder'
import SearchBox from '../Components/Search/SearchBox'; 
import './Generation.css';


class Gen1 extends Component {
  
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
    fetch('https://pokeapi.co/api/v2/pokedex/6')
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
        <h1 id='title'>Generation 1</h1>


        <div className='teamBuilder'>
          <form class="teamForm">
            <fieldset class="teamFieldset">
              <h3>Your Team</h3>
              <TeamBuilder />
            </fieldset>
          </form>
        </div>

        <div className='choosePokemon'>
          <form class="cardForm">
            <fieldset class="cardFieldset">
            {/* Pokemon Selection */}
            <h3>Choose Your Pokemon</h3>
            {/* Search Box */}
            <SearchBox className='searchBar'
              placeholder='Search Pokemon' 
              handleChange= {this.change4Search}
            />
            <CardList pokemon={searchFilter}></CardList>
            </fieldset>
          </form>
        </div>
       
      </div>
    )
  }
  

}
export default Gen1;