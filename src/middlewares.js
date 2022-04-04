import thunk from 'redux-thunk';

export const configureThunk = basePath => thunk.withExtraArgument(basePath);