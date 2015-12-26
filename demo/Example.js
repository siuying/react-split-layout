import React from 'react';
import ReactDOM from 'react-dom';
import SplitView from '../lib/SplitView';

class Example extends React.Component {
  render() {
    return (
      <SplitView>
        <SplitView.Pane>
          <div><h1>Hello</h1></div>
        </SplitView.Pane>
        <SplitView.Pane grow={1}>
          <div><h1>World</h1></div>
        </SplitView.Pane>
      </SplitView>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("container"));
