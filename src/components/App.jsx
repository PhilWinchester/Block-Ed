import React, { Component } from 'react';
import AjaxFunctions from '../helpers/AjaxFunctions'
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state={
      login: {
        username: '',
        password: '',
      },
      signup: {
        username: '',
        password: '',
      },
      user: {
        username: '',
        password: '',
        privateKey: '',
        publicKey: ''
      },
      election: {
        name: '',
        id: 0,
        options: ['yes','no']
      },
      elections: [],
      vote: {
        election: 0,
        options: 1,
        user_signature: 'thisisasignedmessage'
      }
    }
  }

  componentDidMount() {
    AjaxFunctions.pyGetElect()
      .then(e_data => {
        this.setState({
          elections: e_data
        })
      })
      .catch(err => console.log(err))
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

  handleElectionUpdate(e) {
    this.setState({
      election: {
        name: e.target.value,
        id: this.state.elections.length + 1,
        options: ['a','b']
      }
    })
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
        <h1>Welcome to Block -Ed</h1>
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
        <div className="signup">
          Sign up
          <input
            type="search"
            placeholder="username"
            onChange={(e) => this.handleUsernameUpdate(e, 'sign')}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => this.handlePasswordUpdate(e, 'sign')}
          />
          <button onClick={() => this.handleSignup()}>Signup</button>

        </div>
        <hr/>
        <div className="election">
          <label>
            New Election
            <br/>
            <input
              type="search"
              placeholder="name"
              onChange={(e) => this.handleElectionUpdate(e)}
            />
          </label>
        </div>
        <button onClick={() => this.voteFetch()}>Vote</button>
        <button onClick={() => this.electFetch()}>Create Election</button>
      </div>
    );
  }
}
