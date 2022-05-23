import React from 'react';
import  Card  from './individualCard';
import './CardList.css'
import SearchBox from '../Search/SearchBox'
// action to add pokemon 
import {addPokemon} from '../../Redux/Action/teamActions';
// bring in our global variable
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';


const CardList = ({pokemonSelection, setState, search, typing, setSearch}) => {
  // reference to global state to push an action to data 
  const dispatch = useDispatch();
  // reference to global state to grab data
  const team = useSelector(state => state.team.team);
 
  // array that has pokemon names in it
  // used to check length of global state 
  let checkTeam = team.filter(pokemon => pokemon.id)

  // change our pokemon in the global state
  const addToGlobalState = (e) => {
    e.preventDefault();
    let newTeamMemberId = e.target.id; 
    let newTeamMemberClass = e.target.className;

    // variable for length of list array
    const partyLength = checkTeam.length;

    // check to see already in the party and if party is less than 6
    if (partyLength < 6){
   
      // dispatch selected pokemon id to global variable
      dispatch(
          // use action addPokemon
          addPokemon({
            id: newTeamMemberId,
            entry: newTeamMemberClass
          })
      ) 
    }
    // if it was picked from typing 
    typing.length = 0;
    // set search to empty if clicked from search
    setSearch("")
    // SearchBox.innerhtml("")
    console.log(search);
    // call remove from selection list after pokemon was added to team
    removeFromSelection(newTeamMemberId, partyLength);
  }


  // remove pokemon from selection
  const removeFromSelection = (newTeamMember, partyLength) => {
    // remove pokemon from the choices list
    // filter to get pokemon not picked
    if (partyLength < 6){
      setState(state => state.filter((selected) => selected.pokemon_species.name !== newTeamMember))
    }
  }


  console.log(typing.length + 1)
  // console.log(pokemonSelection);

  const filterTypingOfPokemon = () => {

    console.log('hello world');
  }



  return (
    <>
      {
        (typing.length > 0) ? (
          // For typing filter
          <div className='card-list'>
            {typing.map(pokemon => (
              <Card key={pokemon.pokemon_species.name} pokemon={pokemon.pokemon_species.name} entryNum={pokemon.entry_number} handleClick={addToGlobalState}></Card>
            ))}
          </div>

        ) : (search === "") ? (
          // if search is empty show the whole list
          <div className='card-list'>
            {pokemonSelection.map(pokemon => (
              <Card key={pokemon.pokemon_species.name} pokemon={pokemon.pokemon_species.name} entryNum={pokemon.entry_number} handleClick={addToGlobalState}></Card>
            ))}
          </div>
        ) : (
          //  if not map to the pokemon that match to the search bar or typing filter not clicked
          <div className='card-list'>
            {pokemonSelection.map((val) => {
              if (val.pokemon_species.name.includes(search.toLowerCase())) {
                return <Card key={val.pokemon_species.name} pokemon={val.pokemon_species.name} entryNum={val.entry_number} handleClick={addToGlobalState}></Card>
              }
            })}
          </div>
        )
      }
    </>
  )
}

export default CardList;
