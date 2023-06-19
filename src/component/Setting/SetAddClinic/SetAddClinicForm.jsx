import React, { useState } from "react";
import s from './style.module.css';
import CloseBtn from "../../Modules/CloseBtn/CloseBtn";
import { api } from "../../../functions/api";
import { Grid, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { TimeField } from "@mui/x-date-pickers";

const SetAddClinicForm = ({close})=>{

    const [state,setState] = useState({clinic:{name:"",startTime:"",endTime:"",address:""}})
    const sx = {
        width:"100%"
    }
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
                    <TextField value={state.clinic.name} 
                                type="text" 
                                required 
                                variant="standard" 
                                sx={sx}
                                label="Назва клініки"
                                onChange={(e)=>{
                                    setState({...state,clinic:{...state.clinic,name:e.target.value}})
                                }}/>
                </div>
                <div>       
                    <TextField value={state.clinic.address} 
                                type="text" 
                                required 
                                sx={sx}
                            
                                variant="standard" 
                                label="Адреса клініки"
                                onChange={(e)=>{
                                    setState({...state,clinic:{...state.clinic,address:e.target.value}})
                                }}/>
                </div>
                <div>
                    <p>Час роботи клініки</p>
                <Grid container spacing={2}>
                    <Grid>
                    <TextField value={state.clinic.startTime} 
                                type="time" 
                                required 
                                
                                variant="standard" 
                                label="Початок"
                                onChange={(e)=>{
                                    setState({...state,clinic:{...state.clinic,startTime:e.target.value}})
                                }}/>
                    </Grid>
                    <Grid>
                       
                    <TextField value={state.clinic.endTime} 
                                type="time" 
                                required 
                                
                                variant="standard" 
                                label="Кінець"
                                onChange={(e)=>{
                                    setState({...state,clinic:{...state.clinic,endTime:e.target.value}})
                                }}/>
                </Grid>
                </Grid>
                </div>
                <div>
                    <button className="btn">Додати клініку</button>
                </div>
            </form>
        </div>
    )
}

export default SetAddClinicForm;