import React from 'react';
import ReactDOM from 'react-dom';
import SplitView from '../lib/SplitView';

class Example extends React.Component {
  render() {
    return (
      <SplitView
        onChange={this.onChange}
        initialSizes={[100, null, 100, null]}
        minimumSizes={[100, 100, 100, 100]}
        maximumSizes={[null, null, 300, null]}>
        <div><h1>Hello</h1></div>
        <div><h1>World</h1></div>
        <div><h1>Foo</h1></div>
        <SplitView
          direction="horizontal"
          initialSizes={[150]}
          onChange={this.onChange}>
          <div><h1>Vertical 1</h1></div>
          <div><h1>Vertical 2</h1></div>
          <div><h1>Vertical 3</h1></div>
        </SplitView>
      </SplitView>
    );
  }

  onChange(sizes) {
    console.log("size = ", sizes)
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
