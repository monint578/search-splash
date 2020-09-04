import React from "react";
import { connect } from "react-redux";
import { deleteQuery } from "../actions/actions";

class QueriesList extends React.Component {
  //sending query text to App.js
  handleClickQueries = (queries) => {
    const searchQueries = queries;
    this.props.reset();
    this.props.searchQueries(searchQueries);
  };

  //delete query from list
  handleClick = (title) => {
    this.props.deleteQuery(title);
  };

  render() {
    const { queries } = this.props;
    return (
      <div className="queries">
        {queries.map((item) => (
          <div key={item.title} className="query">
            <button
              onClick={() => {
                this.handleClickQueries(item.title);
              }}
            >
              #{item.title}
            </button>
            <button
              onClick={() => this.handleClick(item.title)}
              className="delete"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

//maping queries props from rootReducer.js
const mapStateToProps = (state) => {
  return {
    queries: state.queries,
  };
};

//delete query props from rootReducer.js
const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuery: (queryText) => {
      dispatch(deleteQuery(queryText));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueriesList);
