import React from 'react'
import './TeamBuilder.css'

// bring in our global variable
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
// action to remove pokemon 
import {deletePokemon} from '../../Redux/Action/teamActions';

const TeamBuilder = ({setState}) => {

  // reference to global state to push an action to data 
  const dispatch = useDispatch();  

  // reference to global state to grab data
  const team = useSelector(state => state.team.team);

  // remove pokemon from global state
  const handleRemove = (e) => {
    e.preventDefault();
    // delete based off name
    let selected = e.target.id;
    let selectedClass = e.target.className

    // create the pokemon object like how it is in the original data
    let objectPokemon = 
    {
      entry_number: parseInt(selectedClass), 
      pokemon_species: {name: selected} 
    }

    dispatch(
      // use action deletePokemon
      deletePokemon({
        id: selected
      })
    )

    // add it back to selection 
    addToState(objectPokemon);
  }

  // add pokemon back to selection
  const addToState = (object) => {

    setState(state => {
      // state to old stuff and new object
      state = [...state, object]
      // sort our entry_numbers
      state.sort(function(a,b) {
        return a.entry_number - b.entry_number
      })
      return state;
    })

  }

  return (
    <>
      <div className='pickedTeam'>
        {team.map(teamMember => 
          <img 
              src={`https://img.pokemondb.net/sprites/home/normal/${teamMember.id}.png`} 
              alt="pokemon" 
              id={teamMember.id}
              className={teamMember.entry}
              onClick={handleRemove}
              key={teamMember}
          />
        )}
      </div>
    </>
  )
}

export default TeamBuilder;