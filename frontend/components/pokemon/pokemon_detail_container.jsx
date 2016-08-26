import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import * as ACTIONS from '../../actions/pokemon_actions';


const mapStateToProps = (state) => ({
  pokemon: state.current
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
