import React, { Component } from 'react';
import styles from '../styles/AnswerInfo.module.scss'

class Info extends Component {
  render() {
    return (
      <div className="d-flex border border-secondary rounded p-2">
        <div className="">
          <img src={this.props.data.image} alt="Foto" width="200" height="200"/>
        </div>
        <div>

          {this.props.data.name}
        </div>
      </div>
    );
  }
}

export default Info;
