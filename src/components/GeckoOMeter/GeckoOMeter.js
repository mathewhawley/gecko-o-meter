import React, { Component, PropTypes } from 'react';

const GeckoOMeter = (WrappedComponent) => class extends Component {
  static displayName = 'GeckoOMeter';
  static propTypes = {
    promise: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
      error: false,
    };
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    this.props.promise
      .then(this.handleResponse)
      .then((data) => this.setState({
        ...this.state,
        data,
        loading: false,
      }))
      .catch(this.handleError);
  }

  handleResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  handleError(err) {
    this.setState({
      ...this.state,
      error: true,
      loading: false
    });
    console.error(err);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.error) {
      return <div>Something went wrong!</div>;
    } else {
      return <WrappedComponent {...this.state.data} />;
    }
  }
};

export default GeckoOMeter;
