import React from "react";
import { connect } from "react-redux";
import { addQuery } from "../actions/actions";
import TypeWriter from "./TypeWriter";

class SearchBar extends React.Component {
  state = { searchText: ""};

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //prevents from refresh
    this.props.reset();
    this.props.search(this.state.searchText);
  };

  //save query to Queries List
  handleSaveQuery = (e) => {
    this.props.addQuery(this.state.searchText);
  };

  render() {
    return (
      <div className="search-container">
        <TypeWriter />
        <div className="search">
          <form onSubmit={this.handleSubmit} className="search-bar">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Search for photos..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Search for photos...")}
              minLength="3"
              required
            />
            <button type="submit">
              <i className="fas fa-search fa-lg"></i>
            </button>
          </form>
          <button onClick={this.handleSaveQuery} className="search-save">
            Save Search
          </button>
        </div>
      </div>
    );
  }
}

//Add queries to rootReducer
const mapDispatchToProps = (dispatch) => {
  return {
    addQuery: (title) => {
      dispatch(addQuery(title));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
