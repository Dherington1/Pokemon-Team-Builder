// actions used to add and remove pokemon from party
import {createAction} from '@reduxjs/toolkit';

// actions here use in reducers.js
export const addPokemon = createAction('addPokemon');
export const deletePokemon = createAction('deletePokemon');
export const addSelection = createAction('addSelection');

