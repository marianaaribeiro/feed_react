import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyBXflwRMl3jPTz5AKgN83Ap_F-xO5y226U",
            authDomain: "feed-763cb.firebaseapp.com",
            databaseURL: "https://feed-763cb.firebaseio.com",
            projectId: "feed-763cb",
            storageBucket: "feed-763cb.appspot.com",
            messagingSenderId: "462240015529"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
