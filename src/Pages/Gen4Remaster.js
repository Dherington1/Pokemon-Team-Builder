import React from 'react';
import CardList  from '../Components/Cards/CardList';
import TeamBuilder from '../Components/TeamBuildContainer/TeamBuilder'
import SearchBox from '../Components/Search/SearchBox'; 
import Filter from '../Components/TypingFilter/Filter';
import './Generation.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Gen4Remaster = () => {
  // API pokemon will go into this state
  const [pokemonSelection, setPokemonSelection] = useState([])
  const [pokemonType, setPokemonType] = useState([])
  const [search, setSearch] = useState('');

  // useEffect needed for data to render onto page from API
  useEffect(() => {
    getAllPokemonApiData()
  }, [])

  // fetch for pokemon in this generation
  const getAllPokemonApiData = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokedex/7')
      .then(response => {
        // set state to response 
        setPokemonSelection(response.data.pokemon_entries);
      })
  }

  // fetch for pokemon with certain typing
  const getTypingApiData = (id) => {
    axios
    .get(`https://pokeapi.co/api/v2/type/${id}/`)
    .then(response => {
      let arr = []
      // set response to arr
      response.data.pokemon.forEach(element => {
        arr.push(element.pokemon.name)
      });
      // set typing with a filter
      setPokemonType(pokemonSelection.filter(item => arr.includes(item.pokemon_species.name)));
    })
  }

  // change from search bar
  const change4Search = (e) =>{
    // change our state to the value in the search bar
    setSearch(e.target.value);
  }

  // use for an onClick for typing buttons 
  const typingFetch = (e) => {
    // get id from DOM
    const id = e.target.id;
    // send id to fetch call
    getTypingApiData(id);
  }

  return (
    <div className="App">
      
      {/* Title */}
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 style={{color: 'black'}} id='title'>Generation 4</h1>
      </Link>

      {/* Users team */}
      <div className='teamBuilder'>
        <form className="teamForm">
          <fieldset className="teamFieldset">
            <h3>Your Team</h3>
            <TeamBuilder setState={setPokemonSelection}/>
          </fieldset>
        </form>
      </div>

      {/* Pokemon Selection */}
      <div className='choosePokemon'>
        <form className="cardForm">
          <fieldset className="cardFieldset">
          <h3>Choose Your Pokemon</h3>
          <SearchBox className='searchBar'
            placeholder='Search Pokemon' 
            handleChange= {change4Search}
          />
          <Filter handleClick={typingFetch}/>
          <CardList 
            pokemonSelection={pokemonSelection} 
            setState={setPokemonSelection} 
            search={search}
            setSearch={setSearch}
            typing={pokemonType}
          />
          </fieldset>
        </form>
      </div>
      
    </div>
  )
}

export default Gen4Remaster;