import React from 'react';
import ReactDOM from 'react-dom';

import Pane from './Pane';
import Divider from './Divider';
import { Directions } from './Constants';

const styles = {
  base: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    outline: 'none',
    overflow: 'hidden',
    userSelect: 'none'
  },
  vertical: {
    flexDirection: 'row',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0
  },
  horizontal: {
    flexDirection: 'column',
    height: '100%',
    minHeight: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%'
  },
  dragging: {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
  }
};

export default class SplitView extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {active: false, sizes: this.props.initialSizes};
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
    const initialSizes = this.props.initialSizes;
    const styles = this.styles();
    var children = [];

    this.props.children.forEach((child, index) => {
      let paneId = `pane-${index}`;
      let pane = (<Pane ref={paneId} key={paneId} initialSize={initialSizes[index]} direction={direction}>{child}</Pane>);
      children.push(pane);

      if (index != this.props.children.length - 1) {
        let dividerId = `divider-${index}`;
        let divider = <Divider key={dividerId} direction={direction} onMouseDown={this.createOnMouseDownWithKey(paneId, index)} />
        children.push(divider);
      }
    })

    return (
      <div style={styles}>
        {children}
      </div>
    )
  }

  createOnMouseDownWithKey(key, index) {
    return (event) => {
      const ref = this.refs[key];
      const node = ReactDOM.findDOMNode(ref);
      const position = this.props.direction === 'vertical' ? event.clientX : event.clientY;
      this.setState({
        active: true,
        index: index,
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

    const index = this.state.index;
    const minPosition = this.props.direction === 'vertical' ? this.state.node.offsetLeft : this.state.node.offsetTop;
    const currentPosition = this.props.direction === 'vertical' ? event.clientX : event.clientY;
    const size = currentPosition - minPosition;
    const minSize = this.props.minimumSizes[index];
    const maxSize = this.props.maximumSizes[index];
    if ((minSize && size < minSize) || (maxSize && size > maxSize)) {
      return
    }
    this.state.ref.setState({size: size});

    if (this.props.onChange) {
      let sizes = this.state.sizes ? this.state.sizes.slice(0) : [];
      sizes[index] = size;
      this.props.onChange(sizes);
    }
  }

  onMouseUp(event) {
    this.setState({
      active: false
    });
  }

  styles() {
    const direction = this.props.direction;
    const draggingStyles = this.state.active ? styles.dragging : {};
    console.log(this.state.active, draggingStyles)
    return Object.assign({}, styles.base, styles[direction], draggingStyles);
  }
}

SplitView.defaultProps = {
  direction: 'vertical',
  initialSizes: [],
  minimumSizes: [],
  maximumSizes: []
};

SplitView.propTypes = {
  direction: React.PropTypes.string,
  initialSizes: React.PropTypes.array,
  minimumSizes: React.PropTypes.array,
  maximumSizes: React.PropTypes.array,
  onChange: React.PropTypes.func
};

SplitView.Divider = Divider;
SplitView.Pane = Pane;
