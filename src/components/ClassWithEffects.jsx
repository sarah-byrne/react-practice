import React from "react";

class ClassWithEffects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked button 1 ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked button 1 ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked button 1 {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me (button 1)
        </button>
      </div>
    );
  }
}

export default ClassWithEffects;
