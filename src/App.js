import React, { Component } from 'react';
import './App.css';
import Slider from './Slider';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      damage: null,
      numCards: null
    };
  }
  updateDamage(damage, numCards) {
    this.setState({
      damage: damage,
      numCards: numCards
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={`${process.env.PUBLIC_URL}/bro.png`} alt=""/>
          <img src={`${process.env.PUBLIC_URL}/bro.png`} alt=""/>
          <img src={`${process.env.PUBLIC_URL}/bro.png`} alt=""/>
          <img src={`${process.env.PUBLIC_URL}/bro.png`} alt=""/>
          <img src={`${process.env.PUBLIC_URL}/bro.png`} alt=""/>
        </div>
        <Slider updateDamage={this.updateDamage.bind(this)}/>
        <div className="damage">
          DAMAGE: {this.state.damage}
          <br/>
          DRAWN: {this.state.numCards}
        </div>
      </div>
    );
  }
}

export default App;
