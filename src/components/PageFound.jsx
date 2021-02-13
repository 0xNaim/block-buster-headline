import React, { Component } from "react";

class PageFound extends Component {
  render() {
    const { totalResults, currentPage, totalPage, jumpTop } = this.props;
    return (
      <div ref={jumpTop} className="d-flex">
        <p className="text-black-50">About {totalResults} results found</p>
        <p className="text-black-50 ms-auto">
          {currentPage} page of {totalPage}
        </p>
      </div>
    );
  }
}

export default PageFound;
