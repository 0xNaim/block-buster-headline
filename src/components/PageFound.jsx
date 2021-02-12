import React, { Component } from "react";

class PageFound extends Component {
  render() {
    const { totalResults, currentPage, totalPage } = this.props;
    return (
      <div className="d-flex">
        <p className="text-black-50">About {totalResults} results found</p>
        <p className="text-black-50" style={{ marginLeft: "auto" }}>
          {currentPage} page of {totalPage}
        </p>
      </div>
    );
  }
}

export default PageFound;
