import {
    LISTA_FEED,

} from '../actions/types';

const INITIAL_STATE = {
  
   
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {


        case LISTA_FEED:
            return action.payload 
       

        default:
            return state;
    }
}