import React, { PropTypes } from 'react';
import Loader from '../Loader';
import ErrorMessage from '../Error';

const ViewHandler = (WrappedComponent) => {
  function ViewHandler({ loading, error, data }) {
    if (loading) {
      return <Loader/>;
    } else if (error) {
      return <ErrorMessage />;
    } else {
      return <WrappedComponent {...data} />;
    }
  }

  ViewHandler.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  };

  return ViewHandler;
};

export default ViewHandler;
