import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

//youtube API key
const API_KEY = 'AIzaSyBqpuja5iutgBYzDJnosjY2-UkZ5EZg-6o';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

// take this component's generated HTML and put it in the DOM

//this needs two parameters, the second is the target: where to render the component (existng node)
ReactDOM.render(<App />, document.querySelector('.container'));
