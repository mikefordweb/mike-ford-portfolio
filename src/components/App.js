import React from 'react';
//import './App.css';
//import portfolio from '../portfolio';
import Skillset from './Skillset';
import Samples from './Samples';
import { clientSkills } from '../helpers';

class App extends React.Component {
  constructor() {
    super();
    let firstLoad = false;
    fetch("/portfolio.json")
      .then(res => res.json())
      .then(
        portfolio => this.setState({ loading: false, portfolio }),
        error => this.setState({ loading: false, error })
      );
    this.hoverClient = this.hoverClient.bind(this);
    this.clickClient = this.clickClient.bind(this);
  }

  state = {
    loading: false,
    currentHover: "none",
    currentClient: "cox",
    portfolio: {
      skillset: [
        ["",""]
      ],
      webSamples: [
        {}
      ]
    }
  };

  clickClient(client) {
    this.setState({ currentClient: client});
  }

  hoverClient(hover) {
    this.setState({ currentHover: hover });
  }

  render() {
    return (
      <div>
        <Skillset {...this.state} />
        <Samples {...this.state} hoverClient={this.hoverClient} clickClient={this.clickClient} currentHover={this.state.currentHover} />
      </div>
    );
  }
}

export default App;
