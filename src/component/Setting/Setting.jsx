import React from "react";
import s from "./setting.module.css";
import SetAddClinic from "./SetAddClinic/SetAddClinic";
import SetGetClinics from "./SetGetClinics/SetGetClinics";
import SetAddPriceList from "./SetAddPriceList/SetAddPriceList";
const Setting = ()=>{

    return (
        <div className={s.wrap}>
            <h1>Setting</h1>
            <div className={s.inner}>
                <div className={s.wrap__block}>
                    <SetAddClinic />
                </div>
                <div className={s.wrap__block}>
                    <SetGetClinics />
                </div>
                <div className={s.wrap__block}>
                    <SetAddPriceList />
                </div>
            </div>
            
        </div>
    )
}

export default Setting;