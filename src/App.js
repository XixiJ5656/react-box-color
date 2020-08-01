import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    backgroundColor: "green",
  };
  // toggle = () => {
  //   if (this.state.backgroundColor === "green") {
  //     this.setState({ backgroundColor: "darkred" });
  //   } else {
  //     this.setState({ backgroundColor: "green" });
  //   }
  //   this.setState({ count: this.state.count + 1 });
  // };

  changeColor = () => {
    const backgroundColor = [
      "red",
      "blue",
      "green",
      "lightgrey",
      "lightgreen",
      "purple",
      "orange",
      "pink",
      "black",
    ];
    let randomColor =
      backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
    this.setState({
      count: this.state.count + 1,
      backgroundColor: randomColor,
    });
  };
  render() {
    const pStyle = { fontSize: 25, color: "white", margin: "auto" };
    const backgroundStyle = {
      height: 300,
      width: 300,
      backgroundColor: this.state.backgroundColor,
      display: "flex",
    };
    return (
      <button
        className="box"
        onClick={this.changeColor}
        style={backgroundStyle}
      >
        <p style={pStyle}>Click Here</p>
        <p style={pStyle}>{this.state.count}</p>
      </button>
    );
  }
}

export default App;
