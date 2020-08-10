import React from 'react';
import styles from './style/Burron.module.scss';

const CustomButton = ({ disabled, onClick }) => {
  return (
    <div className='container'>
      <button
        type="button"
        className={`btn btn-outline-secondary btn-lg btn-block ${styles.noOutline}`}
        onClick={!disabled ? onClick : () => {}}
        style={{ boxShadow: 'none' }}
        disabled={disabled}
      >
        Next level
      </button>
    </div>
  );
}

export default CustomButton;
