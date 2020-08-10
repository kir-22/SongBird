import React, { Component } from 'react';
import styles from '../styles/AnswerInfo.module.scss';

const Lists = ({ data, checkedAnswers = [], winAnswer, onClick }) => {
  return (
    <ul className="border border-secondary rounded p-0">
      {
        data.map((el, i) => {
          const checked = checkedAnswers.some(element => element === el.id);
          return (
            <li
              key={i}
              onClick={() => onClick(el)}
              className={`border-bottom ${ styles.listLi } ${ !!checked ? styles.selectLi : ''} ${!!winAnswer && el.id === winAnswer ? styles.win : ''}`}
            >
              {el.name}
            </li>
          )}
        )
      }
    </ul>
  );
}

export default Lists;
