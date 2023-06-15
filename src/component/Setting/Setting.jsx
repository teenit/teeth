import React from "react";
import s from "./setting.module.css";
import SetAddClinic from "./SetAddClinic/SetAddClinic";
import SetGetClinics from "./SetGetClinics/SetGetClinics";
import SetChangeClinicInfo from "./SetChangeClinicInfo/SetChangeClinicInfo";
import SetWorkTime from "./SetWorkTime/SetWorkTime";
import SetAutoAddCard from "./SetAutoAddCard/SetAutoAddCard";
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
                    <SetChangeClinicInfo />
                </div>
                <div className={s.wrap__block}>
                    <SetWorkTime />
                </div>
                <div className={s.wrap__block}>
                    <SetAutoAddCard />
                </div>
                
                <div className={s.wrap__block}>
                    <SetAddPriceList />
                </div>
            </div>
            
        </div>
    )
}

export default Setting;