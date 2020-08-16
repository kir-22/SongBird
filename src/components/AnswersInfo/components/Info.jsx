import React, { Component } from 'react';
import imp from '../../../assets/images/bird.jpg';
import styles from '../styles/AnswerInfo.module.scss'

const Info = ({ data }) => {
  return (
    <div className={`d-flex border border-secondary rounded p-2 pl-4 pr-4 h-100 ${styles.bg}`}>
      <div className="row">
        {
          !data
            ? <div className="col-12 p-0">
                <p className='text-left p-0 m-0'>Прослушайте плеер.</p>
                <p className='text-left p-0 m-0'>Выберите запись из списка.</p>
              </div>
            : <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                <img className={styles.image} src={data.image} alt="Foto" width="200" height="155" />
              </div>
        }
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0'>
          <h2>
            {data.name}
          </h2>
          <p>{data.species}</p>
          <div>
            {
              !!data
                ? <audio controls className="w-100">
                    <source src={data.audio} type='audio/mp3'/>
                  </audio>
                : false
            }
          </div>
        </div>
        <div className='col-12'>
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default Info;
