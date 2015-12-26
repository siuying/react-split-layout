import React from 'react';
import ReactDOM from 'react-dom';

import Pane from './Pane';
import Divider from './Divider';
import { Directions } from './Constants';

export default class SplitView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {active: false, resized: false, positions: []}
  }

  render() {
    const direction = this.props.direction;
    var children = this.props.children;
    const styles = this.stylesWithDirection(direction);

    for (var i = children.length - 1; i > 0; i--) {
      children.splice(i, 0, (
        <Divider key={`divider-${i}`} direction={direction}/>
      ))
    }
    return (
      <div style={styles}>
        {children}
      </div>
    )
  }

  stylesWithDirection(direction) {
    let style = {
        display: 'flex',
        flex: 1,
        position: 'relative',
        outline: 'none',
        overflow: 'hidden',
        userSelect: 'none'
    };

    if (direction === 'vertical') {
      style = Object.assign(style, {
        flexDirection: 'row',
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0
      })
    } else {
      style = Object.assign(style, {
        flexDirection: 'column',
        height: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%'
      })
    }
    return style;
  }
}

SplitView.defaultProps = {
  direction: 'vertical'
};

SplitView.propTypes = {
  direction: React.PropTypes.string,
  children: (props, propName, componentName) => {
    // TODO: A Vaildation
  }
};

SplitView.Divider = Divider;
SplitView.Pane = Pane;
