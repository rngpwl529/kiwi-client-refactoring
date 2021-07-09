import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const { capture } = this.props;
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>
            <button onClick={capture}>Capture</button>
          </li>
        </ul>
      </nav>
    );
  }
}
