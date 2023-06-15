import React, { useState } from "react";

import s from "./CalendarGrid.module.css";
import ModalCalendar from "./ModalCalendar/ModalCalendar";

const CalendarGrid = ({startDay,momentTime,momentStart,worker,users,test,modal,setModal})=>{
    const day = startDay.clone();
    const cells = [...Array(42)].map((item,i)=>day.add(1,'day').clone())
    const nameWeek = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","НД"];
    const weekend = (item) => item.day() == 6 || item.day() == 0 ? s.weekend : '';
    const currentDay = (item) => momentStart.isSame(item,'day') ? s.curren__day : null;
    const currentMonth = (item) => momentTime.isSame(item,'month') ? s.curren__month : null;
   console.log(s)
    const userWork = (item)=>{
        let obj = {};
        if(worker?.workTime){
            worker.workTime.map((workTimeMas)=>{
                if(workTimeMas.day == item.format('D') && momentTime.format('M') - 1 == worker.month && currentMonth(item)){
                    obj.color = worker.color;
                    obj.start = workTimeMas.start;
                    obj.end = workTimeMas.end;
                    obj.cabinet = workTimeMas.cabinet;
                }
            })
        }
        return obj;
    }
    return(
        <div className={s.wr}>
            <div className={s.name__week}>
                    {
                        nameWeek.map((item,index)=><div key={item} className={s.week__day}>{item}</div>)
                    }
            </div>
        <div className={s.wrap}>
            <div className={s.inner}>
                {
                    cells.map((item,index)=>{
                        return(
                            <div className={`${s.cell} ${weekend(item)} ${modal.activeDay.class == item.format('D') && momentTime.isSame(item,'month') ? s.active__day : ''}`} style={{
                                backgroundColor:userWork(item)?.color
                            }} key={index} 
                            onClick={()=>{
         
                                    if(!momentTime.isSame(item,'month')) return;
                                    modal.changeModal({...modal,
                                        activeDay:{...modal.activeDay,class:item.format('D')},
                                        show:true,
                                    
                                        item,
                                        userWork:()=>{
                                           return userWork(item);
                                        }})
                            }}>
                                <div className={s.number} onClick={()=>{
                                    console.log(worker)
                                }}>
                                    <span className={`${s.day__number} ${currentDay(item)} ${currentMonth(item)}`}>{item.format("D")}</span>
                                </div>
                                {userWork(item)?.color ? <div>
                                    <span>{userWork(item).start} - {userWork(item).end}</span>
                                    <span>Каб - {userWork(item).cabinet}</span>
                                </div>:null}
                            </div>
                        )
                    })
                }
            </div>  
        </div>
        
        </div>
       
    )
}
export default CalendarGrid;