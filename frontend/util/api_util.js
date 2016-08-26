export const fetchAllPokemon = (success) => {
  $.ajax({
    url: '/api/pokemon',
    success
  });
};

export const fetchPokemon = (pokemonId, success) => {
    $.ajax({
    url: `/api/pokemon/${pokemonId}`,
    success
    });
};

export const createPokemon = (formInfo, success) => {
  $.ajax({
    url: '/api/pokemon',
    type: "POST",
    dataType: JSON,
    data: formInfo,
    success
  });
};
