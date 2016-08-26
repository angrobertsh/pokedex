import React from "react";
import { withRouter } from 'react-router';
import ToyDetailContainer from './toy_detail_container';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleClick (router, url) {
    router.push(url);
  }

  render () {
    let p = this.props.pokemon;
    let toys = p.toys;
    if (toys) toys = toys.map( (toy, idx) => <img src={toy.image_url} key={idx + toy.image_url}
    onClick={this._handleClick.bind(this,this.props.router,`/pokemon/${p.id}/toys/${toy.id}`)}  />);
    let moves = p.moves;
    if (moves) moves = p.moves.join(", ");
    return(<section className="pokemon-detail">
        <ul>
          <img src={p.image_url} alt=""/>
            <li><h2>{p.name}</h2></li>
            <li>Type: {p.poke_type}</li>
            <li>Attack: {p.attack}</li>
            <li>Defense: {p.defense}</li>
            <li>Moves: &#34;{moves}&#34;</li>
          <section className="toys">
              <h3>Toys</h3>
            <ul className="toy-list">
              {toys}
            </ul>
          </section>
        </ul>
        {this.props.children}
      </section>
    );
  }
}

export default withRouter(PokemonDetail);
