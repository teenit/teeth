import React, { useState } from "react";

import s from "./CalendarUsers.module.css";

const CalendarUsers = ({users,lookWorker,worker})=>{

    const [borderObj,setBorderObj] = useState({})

    const border = (user)=>{
        let obj = {}
            obj.color = worker.color;
            setBorderObj({
                color:user.color,
                userID:user.userID
            });
            console.log(user,worker)

    }
    return(
        <div className={s.wrap}>
            {
                users.map((item)=>{
                    return(
                        <div key={item.userID} className={s.user} style={{
                            border: `solid 4px ${borderObj.color && item.userID == borderObj.userID ? borderObj.color: null}`
                        }}>
                            <div className={s.img__user__wrap}>
                                <div className={s.img__user__inner}>
                                    <img src={item.imgUrl} className={s.img__user} alt="" />
                                </div>
                            </div>
                            <div className={s.text__user}>
                                <div className={s.title__wrap}>
                                    <p className={s.title} style={{color:item.color}} onClick={()=>{ 
                                        lookWorker(item);
                                        border(item);
                                    }}>{item.userName}</p>
                                </div>
                                <div className={s.work__wrap}>
                                    <p className={s.work}>{item.work}</p>
                                </div>
                            </div>
                        </div>
                       
                    )
                })
            }
        </div>
    )
}

export default CalendarUsers;