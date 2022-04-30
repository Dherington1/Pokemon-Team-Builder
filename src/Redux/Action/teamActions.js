// actions used to add and remove pokemon from party
import {createAction} from '@reduxjs/toolkit';

// actions here use in reducers.js
export const addPokemon = createAction('addPokemon');
export const deletePokemon = createAction('deletePokemon');













// BELOW IS OLD WAY OF DOING REDUX 
// export const ADD_POKEMON = "ADD_POKEMON";

// // export this action 
// export const addPokemon = (payload) => {
//   return {
//     type: ADD_POKEMON,
//     // payload is pokemon we want to add
//     payload
//   }
// }
