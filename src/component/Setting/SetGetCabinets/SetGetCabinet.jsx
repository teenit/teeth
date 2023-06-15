import { TextField } from "@mui/material";
import React, { useState } from "react";
import s from './style.module.css';
import editImg from './../../../img/icons/edit-50-black.png'
import removeImg from './../../../img/icons/remove-50-black.png'
import enterImg from './../../../img/icons/done-50-black.png'
const SetGetCabinet = ({cab})=>{
const [state,setState] = useState({...cab,edit:true});
return(
    <div>
        <TextField disabled = {state.edit} value={state.title} type="text" variant="standard" onChange={e=>setState({...state,title:e.target.value})}/>
        <div className={s.contain}>
            <TextField disabled = {state.edit} value={state.number} type="number" variant="standard" onChange={e=>setState({...state,number:e.target.value})}/>
            <img className={s.contain__img} src={removeImg} alt="" />
            {
                state.edit ?  <img className={s.contain__img} src={editImg} alt="" 
                                    onClick={()=>{setState({...state,edit:false})}} />
                           :
                              <img className={s.contain__img} src={enterImg} alt="" 
                                    onClick={()=>{setState({...state,edit:true})}} /> 
                            
            }
            
            
        </div>
        
    </div>
)
}

export default SetGetCabinet;