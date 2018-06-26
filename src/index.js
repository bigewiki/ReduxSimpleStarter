import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyBqpuja5iutgBYzDJnosjY2-UkZ5EZg-6o';

//class based component for App
class App extends Component{
  constructor(props){
    super(props);
    //declare empty array for videos
    this.state = { videos: [] };
    //YT API call
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    });
  }

  render(){
    return(
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
