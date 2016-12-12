import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions'
import './Profile.css';

export default class Profile extends Component {
  constructor(){
    super();

    this.state={
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

  handleElectionUpdate(e) {
    this.setState({
      election: {
        name: e.target.value,
        id: this.state.elections.length + 1,
        options: ['a','b']
      }
    })
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
        <h4>Welcome, {this.props.appState.user.username}</h4>
        <hr/>
        <div className="election">
          <h4>New Election</h4>
          <br/>
          <input
            type="search"
            placeholder="name"
            onChange={(e) => this.handleElectionUpdate(e)}
          />
        </div>
        <button onClick={() => this.voteFetch()}>Vote</button>
        <button onClick={() => this.electFetch()}>Create Election</button>
      </div>
    );
  }
}
