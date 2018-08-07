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
import { Textarea } from 'native-base';

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
                    style={{ flex: 1, padding: 10,marginTop:35, justifyContent: 'center', alignItems:'center'}}>

                    <View style={{ flex: 1, justifyContent: 'center', position:'absolute', marginTop:30,  }}>
                      <View style={{backgroundColor: "#FFD7D7", height: 380, width:350, borderRadius:10, justifyContent: 'center', padding:10 }}>
                        <TextInput
                            value={this.props.titulo_post} 
                            placeholder="Titulo" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 45,marginTop: 20 }} 
                            onChangeText={texto => this.props.modificaOTituloPost(texto)} 
                        />   
                        <Textarea
                            value={this.props.descricao_post} 
                            rowSpan={100} bordered
                            placeholder="Descrição" 
                            placeholderTextColor='#000' 
                            style={{ fontSize: 20, height: 280 }} 
                            onChangeText={texto => this.props.modificaODescricaoPost(texto)} 
                        />                        
                     </View>
                     <View style={{ flex: 2, position:'relative', justifyContent: 'flex-end', alignItems:'center', marginTop:40 }}>
                        {this.renderBtCadastro()}
                    </View>
                    

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