import { createReducer } from '@reduxjs/toolkit';

//actions 
import {addPokemon} from '../Action/teamActions';
import {deletePokemon} from '../Action/teamActions';

// initialState of globalState
const initialState = {
  team: []
}

// allows for change in the initialState
const teamReducer = createReducer(initialState, (builder) => {
  // builder always us to add cases to our state
  // action, (receives state and action)
  builder
    // case to add pokemon to team
    .addCase(addPokemon, (state, action) => {
      // reducer to add the pokemon to the array
      state.team.push(action.payload)
    })
    // case to delete pokemon from the team
    .addCase(deletePokemon, (state, action) => {
      // filter to get pokemon that weren't selected to be deleted
      state.team = state.team.filter(pokemon => pokemon.id !== action.payload.id)
    })
})

export default teamReducer;