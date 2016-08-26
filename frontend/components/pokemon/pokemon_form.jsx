import React from 'react';

class PokemonForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        name: "",
        image_url: "",
        attack: "",
        defense: "",
        type: "bug",
        move1: "",
        move2: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  updateState(attr, event) {
    let newState = Object.assign({}, this.state);
    newState[attr] = event.currentTarget.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formInfo = {
      pokemon: {
        name: this.state.name,
        image_url: this.state.image_url,
        attack: this.state.attack,
        defense: this.state.defense,
        moves: [this.state.move1,this.state.move2],
        poke_type: this.state.type
      }
    };
    this.props.createPokemon(formInfo);
  }

  render() {
    return (<section className="pokemon-detail">
      <img src="/assets/pokemon-logo.png"/>
        <ul>
        </ul>
        <form className="pokemon-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" onChange={this.updateState.bind(this, "name")}></input>
          <input type="text" placeholder="Image Url" onChange={this.updateState.bind(this, "image_url")}></input>
          <input type="text" placeholder="Attack" onChange={this.updateState.bind(this, "attack")}></input>
          <input type="text" placeholder="Defense" onChange={this.updateState.bind(this, "defense")}></input>
          <input type="text" placeholder="Move 1" onChange={this.updateState.bind(this, "move_1")}></input>
          <input type="text" placeholder="Move 2" onChange={this.updateState.bind(this, "move_2")}></input>
          <button>Create Pokemon</button>
        </form>
    </section>
    );
  }

}

export default PokemonForm;
