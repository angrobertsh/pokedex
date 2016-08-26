import { applyMiddleware, createStore } from 'redux';
import {pokemonReducer} from '../reducers/pokemon_reducer';
import pokemonMiddleware from '../middleware/pokemon_middleware';

const configStore = () => createStore(pokemonReducer,applyMiddleware(pokemonMiddleware));

export default configStore;
