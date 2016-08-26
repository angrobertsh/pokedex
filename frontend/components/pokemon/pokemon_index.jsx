import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { withRouter } from 'react-router';

class PokemonIndex extends React.Component{

  constructor (props) {
    super(props);
  }

  render() {
    return (<section className="pokedex">
      <ul>
        {this.props.pokemon.map((pokemon, idx) => <PokemonIndexItem key={idx} pokemon={pokemon} />)}
      </ul>
      {this.props.children}
    </section>);

  }

}

export default withRouter(PokemonIndex);
//
// import React from 'react';
//
// const PokemonIndex = (props) => {
//     return (<section className="pokedex">
//       <ul>
//         {this.props.pokemon.map((pokemon, idx) => <li className="pokemon-index-item" key={idx}>{pokemon.name}</li>)}
//       </ul>
//     </section>);
// };
// export default PokemonIndex;
