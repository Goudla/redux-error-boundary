/*
 * ErrorBoundaries Reducer
 */

// Types
import { LOG_BOUNDARY_ERROR, CLEAR_BOUNDARY_ERROR } from './constants';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_BOUNDARY_ERROR:
      return {
        ...state,
        [action.namespace]: {
          error: action.error,
          errorInfo: action.errorInfo
        }
      };
    case CLEAR_BOUNDARY_ERROR:
      let stateCopy = Object.assign({}, state);
      delete stateCopy[action.namespace];
      return stateCopy;
    default:
      return state;
  }
}
