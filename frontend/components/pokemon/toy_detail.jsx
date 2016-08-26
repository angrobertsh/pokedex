import React from "react";

class ToyDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let toy = this.props.toys[this.props.params.toyId];
    if (toy) {
      return(<ul>
        NAME: {toy.name + "\n"}
        HAPPINESS: {toy.happiness + "\n"}
        PRICE: {toy.price}
      </ul>);
    } else {
      return (<div></div>);
    }
  }
}

export default ToyDetail;
