import React from 'react';
import { withRouter } from 'react-router';

class PokemonIndexItem extends React.Component {

  constructor (props) {
    super(props);
  }

  _handleClick (router, url) {
    router.push(url);
  }

  render () {
    let p = this.props.pokemon;
    return (<li onClick={this._handleClick.bind(this,this.props.router,`/pokemon/${this.props.pokemon.id}`)}
      className="pokemon-index-item">
      <span>{p.id}</span>
      <img src={p.image_url} alt={p.name}/>
      <span>{p.name}</span>
    </li>);
  }
}
export default withRouter(PokemonIndexItem);
