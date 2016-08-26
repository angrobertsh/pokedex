import * as ACTIONS from '../actions/pokemon_actions';
import * as API from '../util/api_util';
export default ({getState, dispatch}) => next => action => {

  const fetcbSuccess = data => dispatch(ACTIONS.receiveAllPokemon(data));

  const fetchSingleSuccess = data => {return dispatch(ACTIONS.receivePokemon(data));};

  const createSuccess = data => {return dispatch(ACTIONS.listNewPokemon(data));};


  switch(action.type) {
      case ACTIONS.actionName.REQUEST_ALL_POKEMON:
        API.fetchAllPokemon(fetcbSuccess);
        next(action);
        break;
      case ACTIONS.actionName.REQUEST_POKEMON:
        API.fetchPokemon(action.pokemonId, fetchSingleSuccess);
        next(action);
        break;
      case ACTIONS.actionName.CREATE_POKEMON:
        API.createPokemon(action.formInfo, createSuccess);
        next(action);
        break;
      default:
        next(action);
  }

};
