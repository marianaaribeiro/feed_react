import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Inicio from './components/Inicio';
import Corpo from './components/Corpo';
import AddContato from './components/AddContato';
import CadastroFeed from './components/CadastroFeed';
import Feed from './components/Feed';
import DetalheFeed from './components/DetalheFeed';
import DetalhePost from './components/DetalhePost';
import CadastrarPost from './components/CadastrarPost';



export default props => (
    <Router navigationBarStyle={{backgroundColor: '#000'}} titleStyle={{color: '#fff'}}>
        
        
        <Scene key='Feed' component={Feed} title="Feeds" hideNavBar={true} initial />
        <Scene key='CadastroFeed' component={CadastroFeed} title="Cadastrar Feed" hideNavBar={false}  />
        <Scene key='DetalheFeed' component={DetalheFeed} title="Detalhes da Feed" hideNavBar={false}  />
        <Scene key='DetalhePost' component={DetalhePost} title="Detalhes do Post" hideNavBar={false}  />
        <Scene key='CadastrarPost' component={CadastrarPost} title="Cadastrar um Post" hideNavBar={false}  />
        

        <Scene key='Login' component={Login} title="Login" hideNavBar={true}/>
        <Scene key='Corpo' component={Corpo} title="Corpo" hideNavBar={true}/>
        <Scene key='AddContato' component={AddContato} title="AddContato" hideNavBar={false}/>
        <Scene key='Cadastro' component={Cadastro} title="Cadastro" hideNavBar={false}/>
        <Scene key='Inicio' component={Inicio} hideNavBar={true} />
        


        
        
    
    </Router>
);
