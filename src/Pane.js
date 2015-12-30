import React from 'react';
import ReactDOM from 'react-dom';

export default class Pane extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {size: this.props.initialSize};
  }

  onChange(size) {
    this.setSize({size: size})
  }

  render() {
    const style = this.getCurrentStyle();
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

  getCurrentStyle() {
    const direction = this.props.direction;
    const grow = this.props.grow;
    const size = this.state.size;
    var style = {
      flex: 1,
      position: 'relative',
      outline: 'none',
      flexGrow: grow
    };
    if (this.state.size) {
      if (direction === 'vertical') {
        style = Object.assign(style, {width: size, display: 'flex', flex: "none", flexGrow: 0}, this.props.style);
      } else {
        style = Object.assign(style, {height: size, display: 'flex', flex: "none", flexGrow: 0}, this.props.style);
      }
    } else {
      style = Object.assign(style, {flexGrow: 1}, this.props.style);
    }
    return style;
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
