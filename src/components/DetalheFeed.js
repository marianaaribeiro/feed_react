import React, { Component } from 'react';
import { View, 
        ListView, 
         Button, 
         ImageBackground, 
         Text, 
         } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaOTituloPost,
    modificaODescricaoPost,
    exibirpost,
} from '../actions/OutrasActions';
import { Actions } from 'react-native-router-flux';
import { Container,
         Content,
         Card,
         CardItem,
         Fab,
         Icon,
         Left,
         Body,
         
} from 'native-base';
import _ from 'lodash';

class DetalheFeed extends Component {
    componentWillMount(){
        this.props.exibirpost();
        this.criarFonteDeDados(this.props.lista_feed)
    }

    componentWillReceiveProps(proximaProps){
        this.criarFonteDeDados(proximaProps.lista_feed)
    }

    criarFonteDeDados(lista_feed){
        const ds = new ListView.DataSource( {rowHasChanged: (r1, r2) => r1 !== r2})
        this.fonteDados = ds.cloneWithRows(lista_feed)
    }


    state = {
        active: 'true'
  }

    render() {  
        
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/5.png')}>
                <View style={{ flex: 1, padding: 10}}>

                    <View style={{ flex: 3, justifyContent: 'center', }}>

                        <ListView enableEmptySections
                              dataSource={this.fonteDados}
                              renderRow={data =>{
                                return(
                                <Content padder  style={{ padding: 40}}>
                                    <Card>
                                        <CardItem header>
                                        <Text style={{ fontSize:20 }}>{data.titulo_post}</Text>
                                        </CardItem>
                                        <CardItem>
                                        <Body>
                                            <Text>
                                            {data.descricao_post}
                                            </Text>
                                        </Body>
                                        </CardItem>
                                        <CardItem footer>
                                        <Icon name="trash" />
                                        <Left>
                                            <Text>Remover</Text>
                                        </Left>
                                        </CardItem>
                                    </Card>
                                </Content>
                                 ) }}/>
                   
                                             
                   
                        
                        
                              
                        
                    

                    </View> 
                    <View style={{ flex: 1 }}>
                                <Fab
                                    active={this.state.active}
                                    direction="up"
                                    containerStyle={{ }}
                                    style={{ backgroundColor: '#5067FF' }}
                                    position="bottomLeft"
                                    onPress={() => this.setState({ active: !this.state.active })}>
                                    <Icon name="add" />
                                    <Button style={{ backgroundColor: '#34A34F' }}
                                            onPress={() => Actions.Feed()}>
                                            
                                    <Icon name="paper" />                                                          
                                    </Button>   
                                    <Button style={{ backgroundColor: '#34A34F' }}
                                            onPress={() => Actions.CadastrarPost()}>
                                            
                                    <Icon name="add" />                                                          
                                    </Button>                                                                                                   
                                </Fab>
                    </View>                          
                </View>
            </ImageBackground>
        );

        
    }
}

const mapStateToProps = state => { 
    const lista_feed = _.map(state.ListaFeed, (val, uid) => {
        return {...val, uid}
    })
    
    return (
        {
            titulo_post: state.OutrosReducer.titulo_post,
            descricao_post: state.OutrosReducer.descricao_post,
            lista_feed,
            
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        modificaOTituloPost,
        modificaODescricaoPost,
        exibirpost
    }
)(DetalheFeed);

