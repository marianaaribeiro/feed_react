import React, { Component } from 'react';
import { View, 
         ListView,
         Button, 
         ImageBackground, 
         Text, 
         ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaOTitulo,
    exibirfeed,
   
} from '../actions/OutrasActions';
import { Actions } from 'react-native-router-flux';
import { Fab,
         Content,
         Card,
         CardItem,
         Icon,
         Left,   
} from 'native-base';
import _ from 'lodash';

class Feed extends Component {

    componentWillMount(){
        this.props.exibirfeed();
        this.criarFonteDeDados(this.props.lista_feed)
    }

    componentWillReceiveProps(proximaProps){
        this.criarFonteDeDados(proximaProps.lista_feed)
    }

    criarFonteDeDados(lista_feed){
        const ds = new ListView.DataSource( {rowHasChanged: (r1, r2) => r1 !== r2})
        this.fonteDados = ds.cloneWithRows(lista_feed)
    }

    constructor(props){
        super(props)

    }

     state = {
          active: 'true'
    }


    _cadastrarFeed() {

        const { titulo } = this.props;

        this.props.cadastrarFeed({ titulo });
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
                            onPress={() => this._cadastrarFeed()} 
                        />
        )
    }

    
 

    render() {  
        
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/12.jpg')}>
                <View style={{ flex: 1, padding: 10}}>

                    <View style={{ flex: 3, justifyContent: 'center', }} >

                    <ListView enableEmptySections
                              dataSource={this.fonteDados}
                              renderRow={data =>{
                                return(
                                <View>
                                <Content>                        
                                    <Card>
                                        <CardItem header button onPress={() => Actions.DetalheFeed()}>
                                        <Left style={{alignItems: 'center', justifyContent:'flex-start'}}>
                                            <Text style={{ fontSize:20 }}>{data.titulo}</Text>
                                        </Left>
                                        <Text style={{ width: 68, color:'#BF6EA4' }}>Ver Posts</Text>
                                        <Icon name="arrow-dropright-circle" />                                        
                                        </CardItem>                                
                                        <CardItem footer style={{alignItems: 'center',
                                                                 justifyContent:'center',
                                                                 backgroundColor: '#BBBBBB',
                                                                 height: 25}}>
                                        <Text style={{ width: 80, fontSize: 14 }}>Remover</Text>
                                        <Icon name="trash" />                           
                                        </CardItem>
                                    </Card>
                                </Content>
                                </View>
                                 ) }}/>
                   
                      
                    
                            
                           
                        
                    
                
                        

                            

                    </View>

                    <View style={{ flex: 1 }}>
                                <Fab
                                    active={this.state.active}
                                    direction="up"
                                    containerStyle={{ }}
                                    style={{ backgroundColor: '#5067FF' }}
                                    position="bottomRight"
                                    onPress={() => this.setState({ active: !this.state.active })}>
                                    <Icon name="apps" />
                                    <Button style={{ backgroundColor: '#34A34F' }}
                                            onPress={() => Actions.CadastroFeed()}>
                                            
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
    return { lista_feed}
}

export default connect(
    mapStateToProps, 
    {
        modificaOTitulo,
        exibirfeed,
        
    }
)(Feed);