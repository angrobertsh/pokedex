import { connect } from 'react-redux';
import ToyDetail from './toy_detail';
import * as ACTIONS from '../../actions/pokemon_actions';
import allToys from '../../util/toy_selector.js';

const mapStateToProps = (state) => ({
  toys: allToys(state.current)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ToyDetail);
