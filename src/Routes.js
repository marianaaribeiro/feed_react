import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CadastroFeed from './components/CadastroFeed';
import Feed from './components/Feed';
import DetalheFeed from './components/DetalheFeed';
import CadastrarPost from './components/CadastrarPost';

export default props => (
    <Router navigationBarStyle={{backgroundColor: '#000'}} titleStyle={{color: '#fff'}}>
        <Scene key='Feed' component={Feed} title="Feeds" hideNavBar={true} initial />
        <Scene key='CadastroFeed' component={CadastroFeed} title="Cadastrar Feed" hideNavBar={false}  />
        <Scene key='DetalheFeed' component={DetalheFeed} title="Detalhes da Feed" hideNavBar={true}  />
        
        <Scene key='CadastrarPost' component={CadastrarPost} title="Cadastrar um Post" hideNavBar={false}  />
     
    </Router>
);
