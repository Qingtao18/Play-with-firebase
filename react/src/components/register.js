import React, { Component } from 'react';
// const INITIAL_STATE = {
  // userID: '',
  // email: '',
  // firstName: '',
  // lastName: '',
  // userPic: '',
  // password: '',
  // location: '',
  // rating: '',
  // userLists: '',
  // error: null,
// };


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        };

        this.firebaseRef = this.props.db.database().ref("userDB");
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    pushToFirebase(event) {
        const {name, password} = this.state;
        event.preventDefault();
        this.firebaseRef.child(name).set({name, password});
        this.setState({name: '', password: ''});
        this.firebaseRef.child(name).set({name: this.state.name, password: this.state.password});
    }

    render(){
        return(
            <div>
                <label>User Name</label>
                <input onChange= {e => this.setState({name: e.target.value})} />
                <br />
                <label>Password</label>
                <input onChange= {e => this.setState({password: e.target.value})} />
                <br />
                <button bsStyle="success" onClick={this.pushToFirebase.bind(this)} >Submit</button>
            </div>
        );
    }
}

export default Register;
