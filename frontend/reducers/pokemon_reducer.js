import React from 'react';
import * as ACTIONS from '../actions/pokemon_actions';
import merge from 'lodash/merge';


export const pokemonReducer = (state = {all: [], current: {toys: []}}, action) => {
  switch(action.type){
    case ACTIONS.actionName.RECEIVE_ALL_POKEMON:
      let newState = merge({}, state);
      newState.all = action.pokemon;
      return newState;
    case ACTIONS.actionName.RECEIVE_POKEMON:
      let newSingleState = merge({}, state);
      newSingleState.current = action.pokemon;
      return newSingleState;
    case ACTIONS.actionName.LIST_NEW_POKEMON:
      let newPokemonAddState = merge({}, state);
      newState.all.push(action.pokemon);
      return newPokemonAddState;
    default:
      return state;
  }

};
