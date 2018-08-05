import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import types, { MODIFICA_EMAIL,
                MODIFICA_SENHA,
                MODIFICA_NOME,
                ERRO_DE_CADASTRO, 
                CADASTRO_COM_SUCESSO,
                LOGIN_EFETUADO_COM_ERRO,
                LOGIN_ESTA_CARREGANDO,
                CADASTRO_ESTA_CARREGANDO,
                LOGIN_EFETUADO_COM_SUCESSO                              
             } from './types'

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

//gravar informações do firebase

//cadastrar usuário
export const cadastraUsuario = ({ nome, email, senha }) => {
//disparar uma função de call back para dizer ao reduxThunk em que momento deve disparar a action
 return dispatch => {

    dispatch({ type: CADASTRO_ESTA_CARREGANDO })

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        
    //call back de sucesso, isso é uma promessa
        .then(user => {
            //converter o e-mail para criptografia
            let emailB64 = b64.encode(email);

            //gravando no database. o ref é determinado o nó onde será gravado
            firebase.database().ref(`/usuários/${+emailB64}`)
                    .push({ nome })

            //disparando para o firebase o cadastro do usuário se tudo der certo na gravação no database
                .then(value => cadastroUsuarioSucesso(dispatch))
            
            })

        .catch(erro => cadastroUsuarioErro(erro, dispatch));

 }
    
}



const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_COM_SUCESSO });

    Actions.Inicio();
}

const cadastroUsuarioErro = (erro, dispatch) => {
     dispatch ({ 
         
         type: ERRO_DE_CADASTRO, 
        payload:  alert(erro.message) 
        });
}





//autenticar usuário

export const autenticandoUsuario = ({email, senha}) => {
    
    return dispatch => {

        dispatch({ type: LOGIN_ESTA_CARREGANDO })

//autenticando o usuário no firebase
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => loginSucesso(dispatch))
        .catch(erro => loginErrado(erro, dispatch));
}
}

//caso retorne certo o login

const loginSucesso = (dispatch) => {
    dispatch ({ type: LOGIN_EFETUADO_COM_SUCESSO});
       
    Actions.Corpo();
}

//caso retorne errado o login
const loginErrado = (erro, dispatch ) => {
    dispatch ({
        type: LOGIN_EFETUADO_COM_ERRO,
        payload:  alert(erro.message)
    });

}

// fim da gravação e retorno de erro