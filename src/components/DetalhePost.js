import React, { Component } from 'react';
import { View, 
         TextInput, 
         Button, 
         ImageBackground, 
         Text, 
         ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaOTitulo,
} from '../actions/OutrasActions';
import { Actions } from 'react-native-router-flux';
import { Container,
         Content,
         Card,
         CardItem,
         
} from 'native-base';

class DetalhePost extends Component {

  

    render() {  
        
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/5.png')}>
                <View style={{ flex: 1, padding: 10}}>

                    <View style={{ flex: 3, justifyContent: 'center', }}>
                                             
                   
                        <Content padder ngIf="{this.props.titulo}"  style={{ padding: 40}}>
                            <Card>
                                <CardItem header>
                                <Text>oi</Text>
                                </CardItem>                                
                            </Card>
                        </Content>
                              
                        
                    

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
            titulo: state.OutrosReducer.titulo,
            
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        modificaOTitulo
    }
)(DetalhePost);