import React, { Component } from 'react';

class GeckoOMeter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('https://widgister.herokuapp.com/challenge/frontend?fixed=1')
      .then((res) => res.json())
      .then((data) => this.setState(data))
      .catch((err) => console.error(err));
  }

  render() {
    return <div></div>;
  }
}

export default GeckoOMeter;
