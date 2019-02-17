import uuidV4 from 'uuid/v4';

import {
  selectErrorBoundaries,
  selectUuid,
  selectErrorBoundary,
  makeSelectErrorBoundaryValue,
  makeSelectHasError
} from '../selectors';

import {
  namespaceProp,
  errorState,
  errorInfoState,
  errorBoundaryState,
  errorBoundariesState,
  mockedState
} from './mockState';

describe('selectErrorBoundaries', () => {
  it('should select the errorBoundaries state', () => {
    expect(selectErrorBoundaries(mockedState)).toEqual(errorBoundariesState);
  });
});

describe('selectUuid', () => {
  it('should select the namespace prop', () => {
    const mockedProps = {
      namespace: namespaceProp
    };
    expect(selectUuid({}, mockedProps)).toEqual(namespaceProp);
  });
});

describe('selectErrorBoundary', () => {
  it('should select an errorBoundary if namespace is a match', () => {
    const mockedProps = {
      namespace: namespaceProp
    };
    expect(selectErrorBoundary(mockedState, mockedProps)).toEqual(
      errorBoundaryState
    );
  });

  it('should not select an errorBoundary if namespace is undefined', () => {
    const mockedProps = {};
    expect(selectErrorBoundary(mockedState, mockedProps)).toBeUndefined();
  });

  it('should not select an errorBoundary if namespace is not a match', () => {
    const mockedProps = {
      namespace: uuidV4()
    };
    expect(selectErrorBoundary(mockedState, mockedProps)).toBeUndefined();
  });
});

describe('makeSelectErrorBoundaryValue', () => {
  it('should select the error', () => {
    const errorBoundaryValueSelector = makeSelectErrorBoundaryValue('error');
    const mockedProps = {
      namespace: namespaceProp
    };
    expect(errorBoundaryValueSelector(mockedState, mockedProps)).toEqual(
      errorState
    );
  });

  it('should select the errorInfo', () => {
    const errorBoundaryValueSelector = makeSelectErrorBoundaryValue(
      'errorInfo'
    );
    const mockedProps = {
      namespace: namespaceProp
    };
    expect(errorBoundaryValueSelector(mockedState, mockedProps)).toEqual(
      errorInfoState
    );
  });

  it('should not an invalid field', () => {
    const errorBoundaryValueSelector = makeSelectErrorBoundaryValue('test');
    const mockedProps = {
      namespace: namespaceProp
    };
    expect(
      errorBoundaryValueSelector(mockedState, mockedProps)
    ).toBeUndefined();
  });

  it('should not select a field if namespace is not a match', () => {
    const errorBoundaryValueSelector = makeSelectErrorBoundaryValue('error');
    const mockedProps = {
      namespace: uuidV4()
    };
    expect(
      errorBoundaryValueSelector(mockedState, mockedProps)
    ).toBeUndefined();
  });
});

describe('makeSelectHasError', () => {
  const selectHasErrorSelector = makeSelectHasError();
  it('should select true if namespace is a match', () => {
    const mockedProps = {
      namespace: namespaceProp
    };
    expect(selectHasErrorSelector(mockedState, mockedProps)).toBe(true);
  });

  it('should select false if namespace is not a match', () => {
    const mockedProps = {
      namespace: uuidV4()
    };
    expect(selectHasErrorSelector(mockedState, mockedProps)).toBe(false);
  });
});
