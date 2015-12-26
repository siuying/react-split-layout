import React from 'react';
import ReactDOM from 'react-dom';

import { Directions } from './Constants';

export default class Pane extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {size: this.props.initialSize};
  }

  onChange(size) {
    this.setSize({size: size})
  }

  render() {
    const direction = this.props.direction;
    const grow = this.props.grow;

    var style = {
      flex: 1,
      position: 'relative',
      outline: 'none',
      overflow: 'auto',
      flexGrow: grow
    }

    if (this.state.size) {
      if (direction === 'vertical') {
        style = Object.assign(style, {width: this.state.size, display: 'flex', flex: "none", flexGrow: 0});
      } else {
        style = Object.assign(style, {height: this.state.size, display: 'flex', flex: "none", flexGrow: 0});
      }
    } else {
      style = Object.assign(style, {flexGrow: 1});
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
};


Pane.propTypes = {
  direction: React.PropTypes.string,
  grow: React.PropTypes.number,
  initialSize: React.PropTypes.number
};
Pane.defaultProps = {
  direction: 'vertical',
  grow: 1,
  initialSize: null
};
