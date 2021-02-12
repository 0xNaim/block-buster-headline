import React, { Component } from "react";

class Pagination extends Component {
  state = {
    isEditAble: false,
  };

  render() {
    const {
      currentPage,
      totalPage,
      next,
      prev,
      isPrevious,
      isNext,
      handlePageChange,
      goToPage,
    } = this.props;
    return (
      <div className="d-flex my-5 align-items-center">
        <button
          className="btn btn-warning"
          disabled={!isPrevious}
          onClick={() => {
            prev();
          }}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditAble ? (
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handlePageChange(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  goToPage();
                  this.setState({ isEditAble: false });
                }
              }}
            />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Dubble Tap to Jump Page"
              onDoubleClick={() => {
                this.setState({ isEditAble: !this.state.isEditAble });
              }}
            >
              {currentPage} of {totalPage}
              <br />
              <small>Dubble Tap to Edit</small>
            </p>
          )}
        </div>
        <button
          className="btn btn-warning"
          style={{ marginLeft: "auto" }}
          disabled={!isNext}
          onClick={() => {
            next();
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
