import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.setState({ count: 0 });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (this.state.count === 11) {
      this.setState({ count: 1 });
    }
  }
  render() {
    return (
      <div className="flex items-center">
        <h1 className="m-5">{this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="bg-black p-3 text-white"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
