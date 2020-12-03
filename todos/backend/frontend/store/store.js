import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import {func} from '../middleware/thunk';
import logger from 'redux-logger';

const configStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(func, logger))
}

export default configStore;