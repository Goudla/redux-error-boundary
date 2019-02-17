/**
 * ErrorBoundaries selectors
 */
import { createSelectorCreator, defaultMemoize } from 'reselect';
import isEqual from 'lodash.isequal';

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

const selectErrorBoundaries = state => state.errorBoundaries;
const selectUuid = (state, props) => props.namespace;

const selectErrorBoundary = createDeepEqualSelector(
  [selectErrorBoundaries, selectUuid],
  (errorBoundariesState, namespaceState) => errorBoundariesState[namespaceState]
);

const makeSelectErrorBoundaryValue = field =>
  createDeepEqualSelector(
    selectErrorBoundary,
    errorBoundaryState => errorBoundaryState && errorBoundaryState[field]
  );

const makeSelectHasError = () =>
  createDeepEqualSelector(
    selectErrorBoundary,
    errorBoundaryState => !!errorBoundaryState
  );

export {
  selectErrorBoundaries,
  selectUuid,
  selectErrorBoundary,
  makeSelectErrorBoundaryValue,
  makeSelectHasError
};
