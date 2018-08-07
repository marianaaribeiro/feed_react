import { combineReducers } from 'redux';
import OutrosReducer from './OutrosReducer';
import ListaFeed from './ListaFeed';

export default combineReducers({
    OutrosReducer: OutrosReducer,
    ListaFeed: ListaFeed,
});