import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ToyDetailContainer from './pokemon/toy_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import * as ACTIONS from '../actions/pokemon_actions';


const Root = ({ store }) => {
  const requestThePokemon = () => (store.dispatch(ACTIONS.requestAllPokemon()));
  const requestSinglePokemon = (nextState) => (store.dispatch(ACTIONS.requestPokemon(nextState.params.pokemonId)));
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestThePokemon}>
          <IndexRoute component={PokemonFormContainer} />
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestSinglePokemon}>
            <Route path="/pokemon/:pokemonId/toys/:toyId" component={ToyDetailContainer}>
            </Route>
          </Route>
        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
