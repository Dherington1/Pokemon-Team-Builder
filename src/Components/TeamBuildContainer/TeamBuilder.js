import React from 'react'
import './TeamBuilder.css'

// bring in our global variable
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
// action to remove pokemon 
import {deletePokemon} from '../../Redux/Action/teamActions';

const TeamBuilder = ({pokemon}) => {

  // reference to global state to push an action to data 
  const dispatch = useDispatch();  

  // reference to global state to grab data
  const team = useSelector(state => state.team.team);

  // remove pokemon from global state
  const handleRemove = (e) => {
    e.preventDefault();
    // delete based off name
    let selected = e.target.id;

    dispatch(
      // use action deletePokemon
      deletePokemon({
        id: selected
      })
    )
  }

  return (
    <>
      <div className='pickedTeam'>
        {team.map(teamMember => 
          <img 
              src={`https://img.pokemondb.net/sprites/home/normal/${teamMember.id}.png`} 
              alt="pokemon" 
              id={teamMember.id}
              onClick={handleRemove}
              key={teamMember}
          />
        )}
      </div>
    </>
  )
}

export default TeamBuilder;