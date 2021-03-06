import React from 'react';

class Divider extends React.Component {
  render() {
    const direction = this.props.direction;
    const color = this.props.color;
    const style = Object.assign({}, styles.base, styles[direction], {background: styles.base.background + " " + color}, this.props.style);
    return (
      <span
        style={style}
        onMouseDown={this.props.onMouseDown}
        />
    );
  }
}

const styles = {
  base: {
    boxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    background: "padding-box",

    opacity: 0.2,
    zIndex: 1,

    WebkitBackgroundClip: "padding-box",
    MozBackgroundClip: "padding-box"
  },

  horizontal: {
    height: 11,
    grow: 0,
    margin: "-5px 0",
    borderTop: "5px solid rgba(255, 255, 255, 0)",
    borderBottom: "5px solid rgba(255, 255, 255, 0)",
    cursor: "row-resize",
    width: "100%"
  },

  vertical: {
    width: 11,
    grow: 0,
    margin: "0 -5px",
    borderLeft: "5px solid rgba(255, 255, 255, 0)",
    borderRight: "5px solid rgba(255, 255, 255, 0)",
    cursor: "col-resize",
    height: "100%"
  }
};

Divider.propTypes = {
  direction: React.PropTypes.string,
  color: React.PropTypes.string
};

Divider.defaultProps = {
  direction: 'vertical',
  color: "rgba(128, 128, 128, 1)"
};

export default Divider;
