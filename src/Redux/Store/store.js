import {configureStore} from '@reduxjs/toolkit';
import teamReducer from '../Reducers/teamReducer'


// main (holder/distributor) of our global variable 
const store = configureStore({
  reducer: {
    team: teamReducer,
    selection: teamReducer
  },
});

export default store;