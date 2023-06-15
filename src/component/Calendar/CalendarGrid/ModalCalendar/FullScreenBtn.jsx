import React from "react";
import s from './timeLine.module.css'

const FullScreenBtn  = ({changeScreen,fullScreen})=>{
    return(
        <div className={s.time__item__screen} onClick={()=>changeScreen()}>
                <div className={`${s.screen__btn} ${fullScreen ? s.active : null}`}>
                    <div className={s.wrap__small__block}>
                        <span className={s.b1__1}></span>
                        <span className={s.b1__2}></span>
                    </div>
                    <div className={s.wrap__small__block}></div>
                    <div className={s.wrap__small__block}>
                        <span className={s.b3__1}></span>
                        <span className={s.b3__2}></span>
                    </div>
                    <div className={s.wrap__small__block}></div>
                    <div className={s.wrap__small__block}></div>
                    <div className={s.wrap__small__block}></div>
                    <div className={s.wrap__small__block}>
                        <span className={s.b7__1}></span>
                        <span className={s.b7__2}></span>
                    </div>
                    <div className={s.wrap__small__block}></div>
                    <div className={s.wrap__small__block}>
                        <span className={s.b9__1}></span>
                        <span className={s.b9__2}></span>
                    </div>
                </div>
            </div>
    )
}
export default FullScreenBtn;