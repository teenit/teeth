import React, { useState } from 'react'
import s from './SetWorkTime.module.css'
import WorkTimeRow from './WorkTimeRow'
import { Button } from '@mui/material'

const SetWorkTime = () => {

  const workTime = [
    {
      title:"Перша",
    },
    {
      title:"Друга",
    },
    {
      title:"Повна",
    },
  ]
  const addedData = {title:"Нова зміна"}
  const [work, setWork] = useState([...workTime])
  const addData = () => {
    const newData = [...work]
    newData.push(addedData)
    setWork(newData)
  };
  return (
    <div className={s.wrap}>
      <h3>Робочі зміни</h3>
            <WorkTimeRow work = {work} setWork = {(arg)=>{
              setWork(arg)
            }}/>
      <div className={s.add__row} onClick={()=>{
          addData()
      }}>
        <div className={s.r1}></div>
        <div className={s.r2}></div>
      </div>
      <Button variant="contained" onClick={()=>{
        if(work.length==0){
          alert("Додайте хоча б одну зміну")
        }
        console.log(work);
      }}>Зберегти</Button>
    </div>
  )
}

export default SetWorkTime