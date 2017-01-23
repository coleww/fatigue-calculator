import React, { Component } from 'react';
import './Slider.css';
import Cell from './Cell';

var CELL_WIDTH = 50

function calculateDamage(start, end) {
  var damage = 0;
  var i = start;
  while (i <= end) {
    damage += i++;
  }
  return damage;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: null,
      end: null,
      selecting: false
    };
  }
  handleCellClick(num) {
    if (this.state.selecting) {
      var start = this.state.start
      var end = num
      if (end < this.state.start) {
        [start, end] = [end, start]
      }
      this.setState(Object.assign(this.state, {
        start: start,
        end: end,
        selecting: false,
        damage: calculateDamage(start, end),
        numCards: end - start + 1
      }))
      this.props.updateDamage(this.state.damage, this.state.numCards)
    } else {
      this.setState(Object.assign(this.state, {
        start: num,
        end: null,
        selecting: true,
        damage: null,
        numCards: null
      }))
    }
  }
  render() {
    var nums = [];
    for(var i = 1; i <= 16; i++) {
      nums.push(i);
    }
    return (
      <div className="Slider">
        {nums.map((num) => {
          return <Cell num={num} key={num} state={this.state} onClick={this.handleCellClick.bind(this, num)}/>
        })}
        <div className="floater" style={{
          display: this.state.start ? 'block' : 'none',
          left: ((this.state.start - 1) * CELL_WIDTH) + 'px',
          width: this.state.selecting ? 0 : ((this.state.end - this.state.start + 1) * CELL_WIDTH) + 'px'
        }}></div>
      </div>
    );
  }
}

export default App;
