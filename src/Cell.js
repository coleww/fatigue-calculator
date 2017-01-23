import React, { Component } from 'react';
var classNames = require('classnames');

class App extends Component {
  render() {
    var cellClass = classNames({
      cell: true,
      startCell: this.props.num === this.props.state.start && this.props.state.end === null,
      gradient: (this.props.num >= this.props.state.start && this.props.num <= this.props.state.end)
    })
    return (
      <div className={cellClass} onClick={this.props.onClick}>
        {this.props.num}
      </div>
    );
  }
}

export default App;
