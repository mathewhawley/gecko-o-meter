import React, { Component, PropTypes } from 'react';
import Loader from '../Loader';
import ErrorMessage from '../Error';

const Store = (WrappedComponent) => class Store extends Component {
  static propTypes = {
    promise: PropTypes.shape({
      then: PropTypes.func.isRequired,
      catch: PropTypes.func.isRequired,
    }),
  };

  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
      error: false,
    };
    this.handleStateUpdate = this.handleStateUpdate.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    this.props.promise
      .then(this.handleResponse)
      .then(this.handleStateUpdate)
      .catch(this.handleError);
  }

  handleResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  handleStateUpdate(data) {
    this.setState({
      data,
      loading: false,
    });
  }

  handleError(err) {
    this.setState({
      error: true,
      loading: false,
    });
    console.error(err);
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else if (this.state.error) {
      return <ErrorMessage />;
    } else {
      return <WrappedComponent {...this.state.data} />;
    }
  }
};

export default Store;
