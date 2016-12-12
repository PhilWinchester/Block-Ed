import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions'
import './Profile.css';

export default class App extends Component {
  // constructor(){
  //   super();
  //
  //   this.state={
  //     login: {
  //       username: '',
  //       password: ''
  //     }
  //   }
  // }
  //
  // handleUsernameUpdate(e, str){
  //   this.setState({
  //     login: {
  //       username: e.target.value,
  //       password: this.state.login.password
  //     }
  //   })
  // }
  //
  // handlePasswordUpdate(e, str){
  //   this.setState({
  //     login: {
  //       username: this.state.login.username,
  //       password: e.target.value
  //     }
  //   })
  // }
  //
  // handleLogin(){
  //   let username = this.state.login.username;
  //   let password = this.state.login.password;
  //   console.log(username,password);
  //
  //   AjaxFunctions.login(username,password)
  //     .then((r) => {
  //       console.log(r)
  //       console.log(this.props.appState)
  //       if (r.password !== 'false') {
  //         // this.setState({
  //         //   user: {
  //         //     username: r.username,
  //         //     password: r.password,
  //         //     privateKey: r.private_key,
  //         //     publicKey: r.public_key
  //         //   }
  //         // })
  //         // fire props function to change user state
  //         this.props.updateUserState(r)
  //         console.log('logged in');
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <div>
        <h1>PROFILE</h1>

      </div>
    );
  }
}
