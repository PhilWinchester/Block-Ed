import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import ElectionItem from '../ElectionItem/ElectionItem';
import './Election.css';

export default class Election extends Component {
  constructor(){
    super();

    this.state={
      vote: {
        election: 0,
        options: 1,
        user_signature: 'thisisasignedmessage'
      }
    }
  }

  componentDidMount() {
    console.log(this.props.elections);
  }

  render() {
    const elections = this.props.elections.map((eId, ind) => (
      <ElectionItem
        key={ind}
        name={this.props.elections[eId].name}
        id={this.props.elections[eId].id}
      />
    ))
    return (
      <div className="election-card">
        <h4>Elections</h4>
      </div>
    );
  }
}
