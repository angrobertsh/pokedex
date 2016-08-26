import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './util/api_util';
import * as ACTIONS from './actions/pokemon_actions';
import configStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store = configStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>,root);
  API.fetchAllPokemon((pokemon) => store.dispatch(ACTIONS.receiveAllPokemon(pokemon)));
});
