import {
    LISTA_FEED,
    LISTA_POST,

} from '../actions/types';

const INITIAL_STATE = {
  
   
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {


        case LISTA_FEED:
            return action.payload 
        
        case  LISTA_POST:
            return action.payload 
       

        default:
            return state;
    }
}