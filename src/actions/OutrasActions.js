import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';
import types, { MODIFICA_EMAIL_CONTATO_ADICIONADO,
   ADICIONANDO_CONTATOS_COM_SUCESSO,
    
                                
 } from './types'





export const habilitaInclusaoContato = () => (
    {
        type: ADICIONANDO_CONTATOS_COM_SUCESSO,
        payload: false
    }
)

export const modificaEmailContatoAdicionado = texto => (
    {
        type: MODIFICA_EMAIL_CONTATO_ADICIONADO,
        payload: texto
    }
)