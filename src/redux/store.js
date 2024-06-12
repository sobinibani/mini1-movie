import { createStore } from 'redux';
import handleLogin from './reducer';

const store = createStore(handleLogin);

export default store;