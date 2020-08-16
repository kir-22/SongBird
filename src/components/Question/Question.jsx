import React, { Component } from 'react';
import imp from '../../assets/images/bird.jpg';
import styles from './styles/Question.module.scss';

const Question = ({ question, disabledNextLevel }) => {
  return (
    <div className='container d-flex justify-content-center mt-4 mb-4'>
      <div className='row w-100 block_bg'>
        <div className='col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12 text-center text-sm-center text-md-left text-lg-left text-xl-left'>
          <img src={disabledNextLevel ? imp : question.image} className={styles.image_bird} alt='image_bird' width='200' height='155' />
        </div>
        <div className='col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-12 mt-4 mb-4'>
          {disabledNextLevel ? <p>******</p> : <h2>{question.name}</h2>}
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
