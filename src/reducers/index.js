import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import OutrosReducer from './OutrosReducer';
import ListaFeed from './ListaFeed';

export default combineReducers({
    AutenticacaoReducer: AutenticacaoReducer,
    OutrosReducer: OutrosReducer,
    ListaFeed: ListaFeed,
});