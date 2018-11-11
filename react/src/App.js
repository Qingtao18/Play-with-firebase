import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import firebase from 'firebase'
import Register from './components/register'
import SuccessRegister from './components/successRegister'

class App extends Component {
  constructor(props){
    super(props)
    var config = {
      apiKey: "AIzaSyAPsqBDDOxaj7I3IowasQFr3KSWL_tGgxY",
      authDomain: "test-fast.firebaseapp.com",
      databaseURL: "https://test-fast.firebaseio.com",
      projectId: "test-fast",
      storageBucket: "test-fast.appspot.com",
      messagingSenderId: "340247126430"
    };
    firebase.initializeApp(config);
  }

render() {
        return (
            <div>
                <Register db={firebase} />
                <SuccessRegister db={firebase} />
            </div>
        );
    }
}

export default App;
