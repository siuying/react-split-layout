import React from 'react';
import ReactDOM from 'react-dom';
import SplitLayout from '../lib/SplitLayout';

class Example extends React.Component {
  render() {
    return (
      <SplitLayout
        onChange={this.onChange}
        initialSizes={[100, 300, 100, null]}
        minSizes={[100, 100, 100, 100]}
        maxSizes={[null, null, 600, null]}
        dividerColor="#000">
        <div><h1>Hello</h1></div>
        <div><h1>World</h1></div>
        <div><h1>Foo</h1></div>
        <SplitLayout
          direction="horizontal"
          initialSizes={[50,50,null]}
          onChange={this.onChange}>
          <div><h1>Vertical 1</h1></div>
          <div><h1>Vertical 2</h1></div>
          <div><h1>Vertical 3</h1></div>
        </SplitLayout>
      </SplitLayout>
    );
  }

  onChange(sizes) {
    console.log("size = ", sizes)
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
