import React, { Component } from "react";

class WillRemove extends Component {
  componentDidMount() {
    console.log("Child Mount Called!");
  }

  componentWillUnmount() {
    console.log("Child Unmount Called!");
  }

  render() {
    return <p>I will remove soon</p>;
  }
}

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor Called!");
    this.divRef = React.createRef();
  }

  componentDidMount() {
    console.log("ComponentDidMount Called!");
    // console.log("Mounted: ", this.divRef.current);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate Called!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate Called!");
    return nextState.count <= 5;
  }

  render() {
    console.log("Render Called!");
    // console.log("Ref: ", this.divRef);
    return (
      <div ref={this.divRef}>
        <h2>React Lifecycle Methods</h2>
        <p>Count: {this.state.count}</p>
        {this.state.count % 2 === 0 && <WillRemove />}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Lifecycle;
