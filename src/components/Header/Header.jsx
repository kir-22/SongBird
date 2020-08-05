import React, { Component } from 'react';
import styles from './styles/Header.module.scss';

const Header = ({score = 0}) => {
    return (
      <div className={`${styles.header} container`}>
        <div>SongBird</div>
        <div>Score: { score }</div>
      </div>
    );
}

export default Header;