import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    }

    this.search = this.search.bind(this);
    this.searchEnter = this.searchEnter.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.searchInput);
  }

  searchEnter(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.searchInput);
    }
  }

  handleSearchChange(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  render() {
    return (
      <div className="SearchBar" >
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearchChange} onKeyPress={this.searchEnter} />
        <a className="SearchButton" onClick={this.search}>Search</a>
      </div>
    );
  }
}

export default SearchBar;