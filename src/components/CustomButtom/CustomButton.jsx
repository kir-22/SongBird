import React from 'react';
import styles from './style/Burron.module.scss';

const CustomButton = ({ text, disabled, onClick }) => {
  return (
    <div className='container'>
      <button
        type="button"
        className={`btn btn-outline-secondary btn-lg btn-block ${styles.noOutline} ${ !disabled ? styles.green_bg : '' }`}
        onClick={!disabled ? onClick : () => {}}
        style={{ boxShadow: 'none' }}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
