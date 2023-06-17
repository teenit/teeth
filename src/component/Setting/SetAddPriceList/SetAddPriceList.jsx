import React from "react";
import s from "./style.module.css"
import { Button } from "@mui/material";

const SetAddPriceList = ()=>{

    return(
        <div className={s.wrap}>
            <div className={s.wrap__top}>
                <p>Завантажити прайс лист</p>
            </div>
            <div className={s.text1}>
                <p>Прайс лист буде завантаже у форматі Пудж.</p>
            </div>
            <div className={s.text2}>
                <p>Обережно. Старий завантажений прайс лист буде змінено новим.</p>
            </div>
            <div className={s.text3}>
                <p>Скачати приклад прайс листа натиснути <onclick className={s.sudi}>сюди</onclick></p>
            </div>
            <div className={s.file}>
                <input type="file" />
            </div>
            <div className={s.btnclass}>
                <button className="btn btn__max__content">ZaVантажити</button>
            </div>
            
        </div>
    )
}

export default SetAddPriceList;