import React, { useState } from "react";
import s from './style.module.css';
import CloseBtn from "../../Modules/CloseBtn/CloseBtn";
import { api } from "../../../functions/api";
import { Grid, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Height } from "@mui/icons-material";

const SetChangeClinicForm = ({close})=>{

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
            <h1>Заповніть анкетні дані</h1>
            <h3>Для того, щоб текст у документах починався з нового рядка, необхідно додати br без пробілів </h3>
            <div className={s.text}>Юридична адреса</div>
            <TextField className={s.inputs} type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}>Юридична особа</div>
            <TextField className={s.inputs} type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}>ІПН</div>
            <TextField className={s.inputs} type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}>Назва клініки</div>
            <TextField className={s.inputs} type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}>Адреса клініки</div>
            <TextField className={s.inputs} type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}>Email</div>
            <TextField className={s.inputs} type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}>Номер телефону</div>
            <TextField className={s.inputs} type="number" variant="outlined" sx={{width: '90%', height: '10px'}}/>
        </div>
    )
}

export default SetChangeClinicForm;