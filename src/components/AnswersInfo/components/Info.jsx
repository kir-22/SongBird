import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="border border-secondary rounded">
       {this.props.data.name}
      </div>
    );
  }
}

export default Info;
