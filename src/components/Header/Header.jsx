import React, { Component } from 'react';
import styles from './styles/Header.module.scss';

const Header = ({score = 0, menu = [], level = 0}) => {
    return (
      <div className='container'>
        <div className={styles.header}>
          <div>SongBird</div>
          <div>Score: { score }</div>
        </div>
        <ul className={styles.listContainer}>
          {
            menu.map((el, index) => {
              return <li key={index} className={`${styles.listItem} ${ level === index ? styles.active : ''}`}>{el.name}</li>
            })
          }
        </ul>
      </div>
    );
}

export default Header;
