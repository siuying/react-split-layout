import React from 'react';
import ReactDOM from 'react-dom';
import SplitView from '../lib/SplitView';

class Example extends React.Component {
  render() {
    return (
      <SplitView>
        <div><h1>Hello</h1></div>
        <div><h1>World</h1></div>
        <div><h1>Foo</h1></div>
        <SplitView direction="horizontal">
          <div><h1>Vertical 1</h1></div>
          <div><h1>Vertical 2</h1></div>
          <div><h1>Vertical 3</h1></div>
          <div><h1>Vertical 4</h1></div>
        </SplitView>
      </SplitView>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
