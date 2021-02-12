import React, { Component } from "react";
import { newsCategory } from "../news/News";

class Header extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleKeyPress = (e) => {
    // code goes to here
  };

  render() {
    const { category, changeCategory } = this.props;
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "500" }}>
          Block Buster Headlines
        </h1>
        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter to Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              if (category === newsCategory[item]) {
                return (
                  <button
                    onClick={() => changeCategory(newsCategory[item])}
                    className="btn btn-sm btn-warning mr-2 mb-2"
                    style={{ marginRight: "0.5rem" }}
                  >
                    {`#${newsCategory[item]}`}
                  </button>
                );
              }
              return (
                <button
                  onClick={() => changeCategory(newsCategory[item])}
                  className="btn btn-sm btn-secondary mr-2 mb-2"
                  style={{ marginRight: "0.5rem" }}
                >
                  {`#${newsCategory[item]}`}
                </button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Header;
