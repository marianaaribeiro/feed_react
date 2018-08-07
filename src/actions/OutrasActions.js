import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';
import { MODIFICA_O_TITULO,
   CADASTRO_FEED_SUCESSO,
   CADASTRO_FEED_ERRO,
   CADASTRO_ESTA_CARREGANDO,
   MODIFICAR_TITULO_POST,
   MODIFICAR_DESCRICAO_POST,
   CADASTRO_POST_SUCESSO,
   CADASTRO_POST_ERRO,
   LISTA_FEED,
   LISTA_POST
   
                                
 } from './types'
 import { Actions } from 'react-native-router-flux';

export const modificaOTitulo = (texto) =>(
    {
        type: MODIFICA_O_TITULO,
        payload: texto
    }
)

export const modificaOTituloPost = (texto) =>(
    {
        type: MODIFICAR_TITULO_POST,
        payload: texto
    }
)

export const modificaODescricaoPost = (texto) =>(
    {
        type: MODIFICAR_DESCRICAO_POST,
        payload: texto
    }
)


//gravar informações no firebase

//cadastrar Feed
export const cadastrarFeed = ({titulo}) => {
    //disparar uma função de call back para dizer ao reduxThunk em que momento deve disparar a action
     return dispatch => {
    
        dispatch({ type: CADASTRO_ESTA_CARREGANDO })

        firebase.database().ref(`feeds/titulo/`).push({titulo})
        .then(user => cadastroFeedSucesso(dispatch))
        .catch(erro => cadastroFeedErro(erro, dispatch));


        
       
    }
}

const cadastroFeedSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_FEED_SUCESSO });

    Actions.Feed();
}

const cadastroFeedErro = (erro, dispatch) => {
     dispatch ({ 
        type: CADASTRO_FEED_ERRO, 
        payload:  alert(erro.message) 
        });
}

export const cadastrarPost = ({titulo_post, descricao_post, uid }) =>{
    return dispatch => {
    
        dispatch({ type: CADASTRO_ESTA_CARREGANDO })

        firebase.database().ref(`/feeds/titulo/post/`).push({titulo_post, descricao_post})
        .then(user => cadastroPostSucesso(dispatch))
        .catch(erro => cadastroPostErro(erro, dispatch));
  
    }

}
const cadastroPostSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_POST_SUCESSO });

    Actions.DetalheFeed();
}

const cadastroPostErro = (erro, dispatch) => {
     dispatch ({ 
        type: CADASTRO_POST_ERRO, 
        payload:  alert(erro.message) 
        });
}

export const exibirfeed = () =>{
    const { currentUser} = firebase.database();
    return (dispatch) => {
        firebase.database().ref(`/feeds/titulo/`)
        .on("value", snapshot =>{
            dispatch({type: LISTA_FEED, payload: snapshot.val()})

        })
    }
}
export const exibirpost = () =>{
    const { currentUser} = firebase.database();
    return (dispatch) => {
        firebase.database().ref(`/feeds/titulo/post/`)
        .on("value", snapshot =>{
            dispatch({type: LISTA_POST, payload: snapshot.val()})

        })
    }
}



