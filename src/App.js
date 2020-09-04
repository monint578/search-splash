import React from "react";
import ImagesList from "./Components/ImagesList";
import Search from "./Components/Search";
import Loading from "./Components/Loading";
import QueriesList from "./Components/QueriesList";
import InfiniteScroll from "react-infinite-scroll-component";

import "./styles/style.css";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      images: [],
      page: 1,
      totalPages: 1,
      searchText: "lithuania",
    };
  }

  // Fetching data from unsplash API
  onSearchSubmit = (searchText) => {
    this.setState({ searchText: searchText });

    fetch(
      "https://api.unsplash.com/search/photos?page=" +
        this.state.page +
        "&per_page=50&query=" +
        searchText +
        "&client_id=" +
        apiKey
    )
      .then((res) => res.json())
      .then(
        (response) => {
          this.setState({
            images: this.state.images.concat(response.results),
            loading: false,
            totalPages: response.total_pages,
            searchText: searchText,
          });
        },
        (error) => {
          this.setState({ loading: false, error: error });
          console.log(error);
        }
      );
  };

  increasePageNumber = () => {
    if (this.state.page >= this.state.totalPages) {
      return;
    }
    this.setState({ page: this.state.page + 1 });
  };

  reset = () => {
    this.setState({ page: 1, totalPages: 1, images: [], loading: true });
  };

  componentDidMount() {
    this.onSearchSubmit(this.state.searchText);
  }

  render() {
    if (this.state.error) {
      return <div>Errors: {this.error.message}</div>;
    } else if (this.state.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="container-grad">
          <InfiniteScroll
            dataLength={this.state.images.length}
            next={() => {
              this.increasePageNumber();
              this.onSearchSubmit(this.state.searchText);
            }}
            hasMore={this.state.page < this.state.totalPages}
            loader={<Loading />}
          >
            <Search search={this.onSearchSubmit} reset={this.reset} />
            <div className="container-white">
              <QueriesList
                searchQueries={this.onSearchSubmit}
                reset={this.reset}
              />
              <ImagesList foundImages={this.state.images} />
            </div>
          </InfiniteScroll>
        </div>
      );
    }
  }
}

export default App;
