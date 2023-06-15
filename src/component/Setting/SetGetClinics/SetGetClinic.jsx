import React, { useEffect, useState } from "react";
import { api } from "../../../functions/api";
import doneImg from './../../../img/icons/done-50-black.png';
import editImg from './../../../img/icons/edit-50-black.png';
import eyeGif from './../../../img/icons/eye.gif';
import removeImg from './../../../img/icons/remove-50-black.png';
import s from './style.module.css';
import SetGetCabinets from "../SetGetCabinets/SetGetCabinets";
const SetGetClinic = ({item})=>{
    const [state, setState] = useState({...item})
    const [lookCabs,setLookCabs] = useState(false)
    const [edit,setEdit] = useState(true)
    return(
        <div className={s.wrap__clinic}>
            <div className={s.clinic__title}>
                <div className={s.clinic__title__inp}>
                    <input disabled = {edit} type="text" value={state.clinic.name} onChange={(e)=>{
                        setState({...state,clinic:{...state.clinic,name:e.target.value}})
                    }}/>
                </div>
            </div>
            
            <div className={s.clinic__time}>
                <input disabled = {edit} type="time" value={state.clinic.startTime}  onChange={(e)=>{
                        setState({...state,clinic:{...state.clinic,startTime:e.target.value}})
                    }}/>
                <input disabled = {edit} type="time" value={state.clinic.endTime}  onChange={(e)=>{
                        setState({...state,clinic:{...state.clinic,endTime:e.target.value}})
                    }}/>
            </div>
            <div className={s.clinic__control}>
                {
                    edit ? 
                    <img className={s.clinic__control__img} src={editImg} alt="" onClick={()=>setEdit(false)} /> 
                    :
                    <img className={s.clinic__control__img} src={doneImg} alt="" onClick={()=>{
                        setEdit(true)
                        console.log(state)
                    }}/>
                }
                <img className={s.clinic__control__img} src={eyeGif} alt="" onClick={()=>setLookCabs(true)} />
                <img className={s.clinic__control__img} src={removeImg} alt="" onClick={()=>{
                    if(window.confirm("Ви точно хочете видалити цю клініку? " + state.clinic.name)){
                        console.log("Клініку видалено " + state.clinic.name)
                    }else{
                        console.log("Клініку не буде видалено " + state.clinic.name)
                        
                    }
                }}/>
            </div> 
            {
                lookCabs ? <SetGetCabinets clinic = {state} close={()=>setLookCabs(false)} /> : null
            }
        </div>   
    )
}

export default SetGetClinic;