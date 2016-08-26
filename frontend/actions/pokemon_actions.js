export const actionName = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  REQUEST_POKEMON: "REQUEST_POKEMON",
  CREATE_POKEMON: "CREATE_POKEMON",
  LIST_NEW_POKEMON: "LIST_NEW_POKEMON",
  RECEIVE_POKEMON: "RECEIVE_POKEMON"
};

export const requestAllPokemon = () => ({
  type: actionName.REQUEST_ALL_POKEMON
});

export const receiveAllPokemon = (pokemon) => ({
  type: actionName.RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (pokemon) => ({
  type: actionName.RECEIVE_POKEMON,
  pokemon
});

export const requestPokemon = (pokemonId) => ({
  type: actionName.REQUEST_POKEMON,
  pokemonId
});

export const createPokemon = (formInfo) => ({
  type: actionName.CREATE_POKEMON,
  formInfo
});

export const listNewPokemon = (pokemon) => ({
  type: actionName.LIST_NEW_POKEMON,
  pokemon
});
