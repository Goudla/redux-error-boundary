/**
 * ErrorBoundaries Actions
 */
import { LOG_BOUNDARY_ERROR, CLEAR_BOUNDARY_ERROR } from './constants';

export const logBoundaryError = (namespace, error, errorInfo) => ({
  type: LOG_BOUNDARY_ERROR,
  namespace,
  error,
  errorInfo
});

export const clearBoundaryError = namespace => ({
  type: CLEAR_BOUNDARY_ERROR,
  namespace
});
