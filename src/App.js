import React from "react";
import SearchBar from "./component/SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./component/ImageList";

import "./App.css";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const resolve = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({
      images: resolve.data.results,
    });
  };
  render() {
    return (
      <div className="container ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
