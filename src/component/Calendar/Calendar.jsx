import React, { useState } from "react";
import s from "./calendar.module.css";
import CalendarGrid from "./CalendarGrid/CalendarGrid";
import CalendarMonitore from "./CalendarMonitore/CalendarMonitore";
import moment from "moment/moment";
import CalendarUsers from "./CalendarUsers/CalendarUsers";
import ModalCalendar from "./CalendarGrid/ModalCalendar/ModalCalendar";



const Calendar = ({users,worker,test,modal})=>{

const momentStart = moment();
momentStart['_locale']['_months'] = [
    "Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень",
]
const [momentTime,setMomentTime] = useState(momentStart);
const startDay = momentTime.clone().startOf('month').startOf('week');

const prevHandler = () => setMomentTime(prev => prev.clone().subtract(1,'month'))
const nextHandler = () => setMomentTime(prev => prev.clone().add(1,'month'))
const todayHandler = () => {
    setMomentTime(momentStart)
}

    return (
        <>
                <CalendarMonitore 
                    momentTime = {momentTime}
                    prevHandler = {prevHandler}
                    nextHandler = {nextHandler}
                    todayHandler = {todayHandler}/>
                <CalendarGrid 
                    startDay = {startDay}
                    momentTime = {momentTime}
                    momentStart = {momentStart}
                    worker={worker}
                    test = {test}
                    modal = {modal}
                    setModal = {(argKey, argValue)=>{modal.newState(argKey, argValue)}}
                    users = {users}/>

        </>
    )
}

export default Calendar;