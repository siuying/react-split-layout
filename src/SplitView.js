import React from 'react';
import ReactDOM from 'react-dom';

import Pane from './Pane';
import Divider from './Divider';
import { Directions } from './Constants';

export default class SplitView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {active: false};
    this.onMouseUp = this.onMouseUp.bind(this);
    this.createOnMouseDownWithKey = this.createOnMouseDownWithKey.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('mousemove', this.onMouseMove);
  }


  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  render() {
    const direction = this.props.direction;
    const styles = this.stylesWithDirection(direction);
    var children = [];

    this.props.children.forEach((child, index) => {
      let paneId = `pane-${index}`;
      let pane = (<Pane ref={paneId} key={paneId} direction={direction}>{child}</Pane>);
      children.push(pane);

      if (index != this.props.children.length) {
        let dividerId = `divider-${index}`;
        let divider = <Divider key={dividerId} direction={direction} onMouseDown={this.createOnMouseDownWithKey(paneId)} />
        children.push(divider);
      }
    })

    return (
      <div style={styles}>
        {children}
      </div>
    )
  }

  createOnMouseDownWithKey(key) {
    return (event) => {
      const ref = this.refs[key];
      const node = ReactDOM.findDOMNode(ref);
      const position = this.props.direction === 'vertical' ? event.clientX : event.clientY;
      this.setState({
        active: true,
        ref: ref,
        node: node,
        position: position
      });
    }
  }

  onMouseMove(event) {
    if (!this.state.active || !this.state.node) {
      return;
    }

    let minPosition = this.props.direction === 'vertical' ? this.state.node.offsetLeft : this.state.node.offsetTop;
    let currentPosition = this.props.direction === 'vertical' ? event.clientX : event.clientY;
    let size = currentPosition - minPosition;
    this.state.ref.setState({size: size});
  }

  onMouseUp(event) {
    this.setState({
      active: false
    });
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
