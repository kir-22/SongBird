import React, { Component } from 'react';
import Logo from '../../assets/images/logo.svg';
import styles from './styles/Header.module.scss';

const Header = ({score = 0, menu = [], level = 0}) => {
    return (
      <div className='container'>
        <div className={styles.header}>
          <div>
            <img src={Logo} width="200" height='100'/>
          </div>
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
