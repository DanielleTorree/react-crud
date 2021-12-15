import { createStore } from 'redux';

// combineReducers
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;