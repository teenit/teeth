import React, { useState } from "react";
import s from './style.module.css';
import CloseBtn from "../../Modules/CloseBtn/CloseBtn";
import { api } from "../../../functions/api";

const SetAddClinicForm = ({close})=>{

    const [state,setState] = useState({clinic:{name:"",startTime:"",endTime:""}})

    const saveClinic = (e)=>{
        e.preventDefault()
        api(state,'manage/add-clinic.php')
    //  console.log(state)
    }
    return(
        <div className={s.inner__form}>
            <CloseBtn close={close}/>
            <h3>Додати клініку</h3>
            <form className={s.form} action="" onSubmit={saveClinic}>
                <div>
                    <label htmlFor="">Назва клініки</label>
                    <input value={state.clinic.name} type="text" required placeholder="Назва клініки" onChange={(e)=>{
                        setState({...state,clinic:{...state.clinic,name:e.target.value}})
                    }}/>
                </div>
                <div>
                    <label htmlFor="">Час роботи</label>

                    <input value={state.clinic.startTime} type="time" required onChange={(e)=>{
                        setState({...state,clinic:{...state.clinic,startTime:e.target.value}})
                    }}/>
                    <input value={state.clinic.endTime} type="time" required  onChange={(e)=>{
                        setState({...state,clinic:{...state.clinic,endTime:e.target.value}})
                    }}/>
                </div>
                <div>
                    <button className="btn">Додати клініку</button>
                </div>
            </form>
        </div>
    )
}

export default SetAddClinicForm;