import React from 'react';
import ReactDOM from 'react-dom';

// create new component
// this component should create some html

const App = function() {
  return <div>Hi!</div>;
}


// take this component's generated HTML and put it in the DOM

//this needs two parameters, the second is the target: where to render the component (existng node)
ReactDOM.render(<App />, document.querySelector('.container'));
