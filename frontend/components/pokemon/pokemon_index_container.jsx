import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index';
import * as ACTIONS from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokemon: state.all
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, null)(PokemonIndex);
