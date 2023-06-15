import React from "react";
import s from './timeLine.module.css';

const CabinetInCalendar = ({masLines,cabinet,fullScreen,startInMinutesWork})=>{
    
    const pac = [
        {
            start:"11:00",
            end:"13:30",
            startHour:11,
            startMinutes:0,
            endHour:13,
            endMinutes:30,
            startInMinutes: 11*60 + 0,
            endInMinutes: 13*60 + 30,
            cabinet: 1
        },{
            start:"12:00",
            end:"13:30",
            startHour:11,
            startMinutes:0,
            endHour:13,
            endMinutes:30,
            startInMinutes: 12*60 + 0,
            endInMinutes: 13*60 + 30,
            cabinet: 2
        }
    ]
    const scale = fullScreen ? 1 : 0.5;
    return(
        <div style={{backgroundColor:cabinet.color+"33"}} className={s.cab}>
        <div className={s.time__item__screen}>{cabinet.title}</div>
        <div className={s.cal__data__cab}>
            {
                masLines.map((item,index)=>{
                    return <div key={index} className={s.line} style={{height:fullScreen?'60px':'30px'}}></div>
                })
            }  
            {
                pac.map((item,index) =>{
                    console.log(cabinet)
                    if(item.cabinet !== cabinet.id) return;
                    return(
                        <div key={index}
                            style={{
                                height: (item.endInMinutes - item.startInMinutes) * scale + 'px',
                                top: (item.startInMinutes - startInMinutesWork) * scale + 'px'
                            }} 
                            className={s.patient}
                            >
                            
                        </div>
                    )
                })
            }
            
        </div>
         
        <div className={s.line}></div>
        
    </div>
    )
}
export default CabinetInCalendar;