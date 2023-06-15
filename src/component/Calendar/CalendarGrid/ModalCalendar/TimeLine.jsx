import React, { useState } from "react";
import s from './timeLine.module.css';
import FullScreenBtn from "./FullScreenBtn";
import CabinetInCalendar from "./CabinetInCalendar";


const TimeLine = ({info})=>{

    const masLines = [...Array(info.dailyAmount + 1)];
    const masCabs = [
        {
            title:"Cabinet 1",
            color:"#457821",
            id:1
        },
        {
            title:"Cabinet 2",
            color:"#452121",
            id:2
        },
        {
            title:"Cabinet 3",
            color:"#457869",
            id:3
        }
    ]
    const [fullScreen,setFullScreen] = useState(false)
    return(
        <div className={s.wrap}>
            <div className={s.time__line}>
            <FullScreenBtn changeScreen={()=>setFullScreen(!fullScreen)} fullScreen={fullScreen}/>
            {
                masLines.map((item,index)=>{
                    return(
                        <div style={{height:fullScreen?'60px':'30px'}} className={s.time__item} key={index}>{ 
                                info.startHour + index < 10 ?
                                `0${info.startHour + index}:${info.startMinutes}`: 
                                `${info.startHour + index}:${info.startMinutes}`
                            }
                        </div>
                    )
                })
            }
            </div>
            <div className={s.cabs}>
                {
                    masCabs.map((item)=>{
                        return <CabinetInCalendar 
                                    startInMinutesWork = {info.startInMinutes} 
                                    fullScreen = {fullScreen} 
                                    key={item.id} 
                                    masLines={masLines} 
                                    cabinet={item}/>
                    })
                }
            </div>
            </div>
    )
}
export default TimeLine;