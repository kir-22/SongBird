import React, { Component } from 'react';

class Question extends Component {
  render() {
    console.log(this.props.questions, '<--------')
    return (
      <div className='container'>
        Question
        <img src='' alt='Image' />
        {/* Here need audio player */}
      </div>
    );
  }
}

export default Question;
