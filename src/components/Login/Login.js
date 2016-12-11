import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions'
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state={
      login: {
        username: '',
        password: ''
      }
    }
  }

  handleUsernameUpdate(e, str){
    if (str === 'log') {
      this.setState({
        login: {
          username: e.target.value,
          password: this.state.login.password
        }
      })
    } else {
      this.setState({
        signup: {
          username: e.target.value,
          password: this.state.signup.password
        }
      })
    }
  }

  handlePasswordUpdate(e, str){
    if (str === 'log') {
      this.setState({
        login: {
          username: this.state.login.username,
          password: e.target.value
        }
      })
    } else {
      this.setState({
        signup: {
          username: this.state.signup.username,
          password: e.target.value
        }
      })
    }
  }

  handleLogin(){
    let username = this.state.login.username;
    let password = this.state.login.password;
    console.log(username,password);

    AjaxFunctions.login(username,password)
      .then((r) => {
        console.log(r)
        if (r.password !== 'false') {
          this.setState({
            user: {
              username: r.username,
              password: r.password,
              privateKey: r.private_key,
              publicKey: r.public_key
            }
          })
        }
      })
      .catch(err => console.log(err))
  }

  handleSignup(){
    let username = this.state.signup.username;
    let password = this.state.signup.password;
    console.log(username,password);

    AjaxFunctions.signup(username, password)
      .then((r) => console.log(r))
      .catch(err => console.log(err))
  }

  voteFetch() {
    let vote = {
      election: this.state.vote.election,
      options: this.state.vote.options,
      userPublicKey: this.state.user.publicKey
    }

    AjaxFunctions.pyVote(vote)
      .then(r => console.log(r))
      .catch(err => console.log(err))
  }

  electFetch() {
    AjaxFunctions.pyPostElect(this.state.election)
      .then(r => {
        console.log('post', r)
        this.setState({
          elections: r
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="login">
          Log in
          <input
            type="search"
            placeholder="username"
            onChange={(e) => this.handleUsernameUpdate(e, 'log')}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => this.handlePasswordUpdate(e, 'log')}
          />
          <button onClick={() => this.handleLogin()}>Login</button>

        </div>

      </div>
    );
  }
}
