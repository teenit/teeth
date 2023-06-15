import React from "react";

import s from "./CalendarMonitore.module.css";

const CalendarMonitore = ({prevHandler,nextHandler,todayHandler,momentTime})=>{

    return(
        <div className={s.monitor}>
            <div className={s.date}>
                <div className={s.month}>
                    <span>{momentTime.format("MMMM")}</span>
                </div>
                <div className={s.year}>
                    <span><b>{momentTime.format("YYYY")}</b></span>
                </div>
            </div>
            <div className={s.control}>
                <button className={`${s.control__btn} ${s.control__arrow}`} onClick={prevHandler}>{"<"}</button>
                <button className={s.control__btn} onClick={todayHandler}>{"Сьогодні"}</button>
                <button className={`${s.control__btn} ${s.control__arrow}`} onClick={nextHandler}>{">"}</button>
            </div>
        </div>
    )
}
export default CalendarMonitore;