import uuidV4 from 'uuid/v4';

// Types
import { LOG_BOUNDARY_ERROR } from '../constants';

// Actions
import { logBoundaryError } from '../actions';

describe('ErrorBoundaries Actions', () => {
  describe('logBoundaryError', () => {
    it('should return the correct type and the passed namespace, error and errorInfo', () => {
      const namespace = uuidV4();
      const error = Error('I was created using a function call!');
      const errorInfo = {
        componentStack: 'test'
      };
      const expectedResult = {
        type: LOG_BOUNDARY_ERROR,
        namespace,
        error,
        errorInfo
      };

      expect(logBoundaryError(namespace, error, errorInfo)).toEqual(
        expectedResult
      );
    });
  });
});
