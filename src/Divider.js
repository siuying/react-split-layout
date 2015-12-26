import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    boxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    background: "#000 padding-box",

    opacity: 0.2,
    zIndex: 1,

    ':hover': {
      transition: "all 2s ease",
      webKitTransition: "all 2s ease"
    }
  },

  clip: {
    WebkitBackgroundClip: "padding-box",
    MozBackgroundClip: "padding-box",
  },

  horizontal: {
    height: 11,
    grow: 0,
    margin: "-5px 0",
    borderTop: "5px solid rgba(255, 255, 255, 0)",
    borderBottom: "5px solid rgba(255, 255, 255, 0)",
    custor: "row-resize",
    width: "100%",

    ':hover': {
      borderTop: "5px solid rgba(0, 0, 0, 0.5)",
      borderBottom: "5px solid rgba(0, 0, 0, 0.5)",
    }
  },

  vertical: {
    width: 11,
    grow: 0,
    margin: "0 -5px",
    borderLeft: "5px solid rgba(255, 255, 255, 0)",
    borderRight: "5px solid rgba(255, 255, 255, 0)",
    custor: "col-resize",
    height: "100%",

    ':hover': {
      borderLeft: "5px solid rgba(0, 0, 0, 0.5)",
      borderRight: "5px solid rgba(0, 0, 0, 0.5)",
    }
  }
}

class Divider extends React.Component {
  render() {
    const direction = this.props.direction;
    const style = [styles.base, styles.clip, styles[direction]];
    return (
      <span
        style={style}
        onMouseDown={this.props.onMouseDown}
        />
    );
  }
}

Divider.propTypes = {
  direction: React.PropTypes.string
};

Divider.defaultProps = {
  direction: 'vertical'
};

export default Radium(Divider);
