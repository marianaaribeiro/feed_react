import React, { Component } from 'react';
import { View, 
         TextInput, 
         Button, 
         ImageBackground, 
         Text, 
         ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    
    cadastrarPost,
    modificaOTituloPost,
    modificaODescricaoPost,
} from '../actions/OutrasActions';
import _ from 'lodash';

class CadastrarPost extends Component {

    _cadastrarPost() {

        const { titulo_post, descricao_post } = this.props;

        this.props.cadastrarPost({ titulo_post, descricao_post });
    }


    renderBtCadastro() {

        if(this.props.carregando_cadastro) {
            return (
                <ActivityIndicator size="large"/>
            )
        }

        return (
            <Button 
                            title="Cadastrar" 
                            color='#D67A7A' 
                            onPress={() => this._cadastrarPost()} 
                        />
        )
    }
     

    render() {  
        
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/3.jpg')}>
                <View 
                    style={{ flex: 1, padding: 10}}>

                    <View style={{ flex: 3, justifyContent: 'center', }}>
                      <View style={{backgroundColor: "#FFD7D7", height: 180, borderRadius:10, justifyContent: 'center', padding:10 }}>
                        <TextInput
                            value={this.props.nome} 
                            placeholder="Titulo" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaOTituloPost(texto)} 
                        />   
                        <TextInput
                            value={this.props.nome} 
                            placeholder="Descrição" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaODescricaoPost(texto)} 
                        />                        
                     </View>
                    
                    

                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );

        
    }
}

const mapStateToProps = state => { 
    console.log(state);
    
    return (
        {
            
            carregando_cadastro: state.OutrosReducer.carregando_cadastro,
            titulo_post: state.OutrosReducer.titulo_post,
            descricao_post: state.OutrosReducer.descricao_post,
            
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        
        cadastrarPost,
        modificaOTituloPost,
        modificaODescricaoPost,
    }
)(CadastrarPost);