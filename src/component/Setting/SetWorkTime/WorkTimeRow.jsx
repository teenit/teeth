import React, { useState } from 'react';
import s from './SetWorkTime.module.css';

const WorkTimeRow = ({ work, setWork }) => {
  const deleteData = (index) => {
    const newData = [...work]
    newData.splice(index, 1)
    setWork(newData)
  };
  

  const changeStart = (index, value) => {
    const newData = [...work]
    newData[index] = { ...newData[index], start: value }
    setWork(newData)
  };

  const changeEnd = (index, value) => {
    const newData = [...work]
    newData[index] = { ...newData[index], end: value }
    setWork(newData)
  };
  const changeTitle = (index, value) => {
    const newData = [...work]
    newData[index] = { ...newData[index], title: value }
    setWork(newData)
  };

  return (
    <div className={s.rows}>
      {work.map((item, index) => (
        <div className={s.row__wrap} key={index}>
          <input type="text" className={s.row__title} defaultValue={item.title} onChange={(e) => changeTitle(index, e.target.value)} />
          <div className={s.row__panel}>
            <div className={s.input__wrap}>
              <p>Початок</p>
              <input type="time" onChange={(e) => changeStart(index, e.target.value)} />
            </div>
            <div className={s.input__wrap}>
              <p>Кінець</p>
              <input type="time" onChange={(e) => changeEnd(index, e.target.value)}/>
            </div>
            <div className={s.cross} onClick={() => {
              deleteData(index)
              }}>
              <div className={s.c1}></div>
              <div className={s.c2}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkTimeRow;
