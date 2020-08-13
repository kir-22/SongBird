import React, { Component } from 'react';
import imp from '../../assets/images/bird.jpg';

const Question = ({ question, disabledNextLevel }) => {
  return (
    <div className='container mt-4 mb-4'>
      <div className='row'>
        <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 text-center text-sm-center text-md-left text-lg-left text-xl-left'>
          <img src={disabledNextLevel ? imp : question.image} alt='image_bird' width='200' height='200' />
        </div>
        <div className='col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12'>
          <p>{disabledNextLevel ? '******' : question.name}</p>
          <hr/>
          <div className='d-flex justify-content-center'>
            {
              question
                ? <audio controls>
                    <source src={question.audio} type='audio/mp3'/>
                  </audio>
                : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
