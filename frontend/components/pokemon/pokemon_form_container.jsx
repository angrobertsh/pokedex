import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import * as ACTIONS from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => ({
  createPokemon: formInfo => dispatch(ACTIONS.createPokemon(formInfo))
});

export default connect(null, mapDispatchToProps)(PokemonForm);
