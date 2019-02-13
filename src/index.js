import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
export default class App extends React.Component {
  state = {
    // vytvori promenou komponenty
    names: []
  };
  constructor() {
    super();
    this.getNames();
  }

  getNames() {
    fetch(` https://private-79f19e-pokus46.apiary-mock.com/names`)
      .then(data => data.json()) // napojeni na predchozi funkci(fetch), zretezeni navratovych hodnot
      .then(names => {
        this.setState({ names: names.names });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let NamesList = this.state.names.map(name => (
      <li>
        <strong>{name.name}</strong>
      </li>
    ));
    //return <div>Dobrý den.{JSON.stringify(this.state.names)}</div>; // vypsani pole names jako string
    return <div>{NamesList}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
