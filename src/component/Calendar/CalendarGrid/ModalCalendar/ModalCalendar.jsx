import React, { useState } from "react";
import s from './ModalCalendar.module.css';
import ModalWindow from "../../../Modals/ModalWindow";
import TimeLine from "./TimeLine";
import Calendar from "../../Calendar";
import ss from './../CalendarGrid.module.css'
const ModalCalendar = ({modal})=>{
    const workDay = {
        start:'10:00',
        startInMinutes:600,
        startHour:10,
        startMinutes:'00',
        end:'21:00',
        endInMinutes:1260,
        endHour:21,
        endMinutes:'00',
        dailyAmount:11 
    }

    const userWork = (item,worker)=>{
        let obj = {};
        if(worker?.workTime){
            worker.workTime.map((workTimeMas)=>{
                if(workTimeMas.day == item.format('D') && item.format('M') - 1 == worker.month){
                    obj.color = worker.color;
                    obj.start = workTimeMas.start;
                    obj.end = workTimeMas.end;
                    obj.cabinet = workTimeMas.cabinet;
                }
            })
        }
        return obj;
    }
    console.log(modal.s)
    return(
        <ModalWindow>
            <div className={s.wrap} onClick={(e)=>{
                if(e.target.className == s.wrap){
                    modal.newState('show',false)
                }
            }}> 
                <div className={s.inner}>
                    
                   <TimeLine info = {workDay}/>
                   <div className={ss.modal__cal__wrap}>
                        <div className={s.modal__cal__inner}>
                                
                            <div className={s.modal__cal__inner__calendar}>
                                <Calendar modal={modal}/>
                            </div>
                            <div className={s.modal__cal__inner__text}>
                                hello calendar
                            </div>
                        </div>
                        
                        
                   </div>
                </div>
                <button onClick={()=>console.log(modal)}>okoperkf</button>
            </div>
            
        </ModalWindow>
    )
}
export default ModalCalendar;