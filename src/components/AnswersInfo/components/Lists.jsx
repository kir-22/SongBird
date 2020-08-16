import React from 'react';
import styles from '../styles/AnswerInfo.module.scss';

const Lists = ({ data, checkedAnswers = [], winAnswer, onClick }) => {
  return (
    <ul className={`border border-secondary rounded p-0 m-0 ${styles.bg}`}>
      {
        data.map((el, i) => {
          const checked = checkedAnswers.some(element => element === el.id);
          return (
            <li
              key={i}
              onClick={() => {onClick(el)}}
              className={`d-flex justify-content-flex-start align-items-center border ${ styles.listLi } pl-4`}
            >
              <span className={`${styles.circle} ${ !!checked ? styles.selectLi : ''} ${!!winAnswer && el.id === winAnswer ? styles.win : ''}`}></span>
              {el.name}
            </li>
          )}
        )
      }
    </ul>
  );
}

export default Lists;
