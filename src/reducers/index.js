import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import OutrosReducer from './OutrosReducer';

export default combineReducers({
    AutenticacaoReducer: AutenticacaoReducer,
    OutrosReducer: OutrosReducer,
});