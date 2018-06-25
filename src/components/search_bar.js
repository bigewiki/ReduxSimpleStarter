import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render = () => {
    return(
      <div>
        <input
          onChange={(event) => this.setState({ term: event.target.value })}
        />
        <br/>Value of the input: {this.state.term}
      </div>
    );
  }
}//close class SearchBar
export default SearchBar;
