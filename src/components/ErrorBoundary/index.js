/**
 * ErrorBoundary
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Actions
import {
  logBoundaryError,
  clearBoundaryError
} from '../../services/errorBoundaries/actions';

// Selectors
import { makeSelectHasError } from '../../services/errorBoundaries/selectors';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    clearBoundaryError: PropTypes.func.isRequired,
    FallbackComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    hasError: PropTypes.bool,
    logBoundaryError: PropTypes.func.isRequired,
    namespace: PropTypes.string.isRequired
  };

  static defaultProps = {
    children: null,
    FallbackComponent: null,
    hasError: false
  };

  componentWillUnmount() {
    const { hasError, namespace } = this.props;
    if (hasError) {
      this.props.clearBoundaryError(namespace);
    }
  }

  componentDidCatch(error, errorInfo) {
    const { namespace } = this.props;
    this.props.logBoundaryError(namespace, error, errorInfo);
  }

  render() {
    const { children, FallbackComponent, hasError } = this.props;

    if (hasError) {
      return FallbackComponent;
    }
    return children;
  }
}

const mapStateToProps = createStructuredSelector({
  hasError: makeSelectHasError()
});

export default connect(mapStateToProps, {
  logBoundaryError,
  clearBoundaryError
})(ErrorBoundary);
