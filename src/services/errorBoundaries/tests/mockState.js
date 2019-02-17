import uuidV4 from 'uuid/v4';

const namespaceProp = uuidV4();

const errorState = Error('I was created using a function call!');
const errorInfoState = {
  componentStack: 'test'
};

const errorBoundaryState = {
  error: errorState,
  errorInfo: errorInfoState
};

const errorBoundariesState = {
  [namespaceProp]: errorBoundaryState
};

const mockedState = {
  errorBoundaries: errorBoundariesState
};

export {
  namespaceProp,
  errorState,
  errorInfoState,
  errorBoundaryState,
  errorBoundariesState,
  mockedState
};
