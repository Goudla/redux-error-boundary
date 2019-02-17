// Reducer
import errorBoundariesReducer from '../reducer';

describe('errorBoundariesReducer', () => {
  let state;
  beforeEach(() => {
    state = {};
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(errorBoundariesReducer(undefined, {})).toEqual(expectedResult);
  });
});
