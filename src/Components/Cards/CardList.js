import React from 'react';
import  Card  from './individualCard';
import './CardList.css'
// action to add pokemon 
import {addPokemon} from '../../Redux/Action/teamActions';
// bring in our global variable
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';


const CardList = (pokemon) => {

  // array for entry numbers
  const pokemonNum = [];
  let newArray = [];
  // push our props pokemon numbers into out array
  pokemon.pokemon.forEach((pokeNum) => {
    pokemonNum.push(pokeNum.pokemon_species.name)
    newArray.push(pokeNum.pokemon_species.name)
  })

  // reference to global state to push an action to data 
  const dispatch = useDispatch();

  // reference to global state to grab data
  const team = useSelector(state => state.team.team);

  // array that has pokemon names in it
  // used to check length of global state and if name is already in global state 
  let checkTeam = [];
  
  // filter to push into checkTeam
  team.filter((pokemon) => {
    // push name to array
    checkTeam.push(pokemon.id)
  })


  // change our pokemon in the global state
  const addToGlobalState = (e) => {
    e.preventDefault();
    let newTeamMember = e.target.id; 

    // checks to see if selected pokemon is already in the party
    const notInParty = checkTeam.includes(newTeamMember);
    const partyLength = checkTeam.length;

    // check to see already in the party
    if (!notInParty && partyLength < 6){
        // dispatch selected pokemon id to global variable
        dispatch(
            // use action addPokemon
            addPokemon({
                id: newTeamMember
            })
        ) 
    }

    // remove pokemon from the choices list
    // filter to get pokemon not picked
    newArray = pokemonNum.filter(selected => selected !== newTeamMember);
  }
 
  

  return (
    <>
      <div className='card-list'>
          {pokemonNum.map(pokemon =>(
            <Card key={pokemon} pokemon={pokemon} handleClick={addToGlobalState}></Card>
          ))}
      </div>
    </>
  )

}

export default CardList;

