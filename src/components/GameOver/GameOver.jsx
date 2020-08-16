import React, { Component } from 'react';
import CustomButtom from '../CustomButtom/CustomButton.jsx';

const GameOver = ({onReload, maxScore, score}) => {
  return (
    <>
        {
          maxScore === score 
            ? <div className='container'>
                  <h1 className='d-flex justify-content-center mb-4 mt-4'>YOU ARE AWESOME! You are very klever human!</h1>
              </div>
            : <>
                <div className='container'>
                  <h2 className='d-flex justify-content-center mb-4 mt-4'>Your score is {score} from {maxScore}!</h2>
                </div>
                <CustomButtom
                  onClick = { onReload }
                  text='Play Again'
                />
              </>
        }
    </>
  )
}

export default GameOver;