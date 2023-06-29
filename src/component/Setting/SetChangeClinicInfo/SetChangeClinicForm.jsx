import React, { useState } from "react";
import s from './style.module.css';
import CloseBtn from "../../Modules/CloseBtn/CloseBtn";
import { api } from "../../../functions/api";
import { Button, Grid, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Height } from "@mui/icons-material";

const SetChangeClinicForm = ({close})=>{

    const [state,setState] = useState({
    urAdress:"",
    urHuman:"",
    ipn:"",
    clinicName:"",
    clinicAdress:"",
    email:"",
    numberFirst:"",
    numberSecond:"",
    documentName:"",
    documentNameBills:"",
    text:"",
    textBills:""
})

const [text,setText] = useState([])

    const addText = ()=>{
        let mytext = window.prompt("Напишите сообщение")
        if(mytext !== null){
            setText([...text,mytext])
        }
    }
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
            <div className={s.formtextfield}>
            <div className={s.text}></div>
            <TextField label="Юридична адреса" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Юридична особа"  type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="ІПН" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Назва клініки" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Адреса клініки" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Email" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Номер телефону" type="number" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Номер телефону 2" type="number" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Назва документу" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Назва документу (Розрахунок)" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Текст який додаєтся з низу акту виконаних робіт" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>

            <div className={s.text}></div>
            <TextField label="Текст який додаєтся з низу акту виконаних робіт (Розрахунок)" type="text" variant="outlined" sx={{width: '90%', height: '10px'}}/>
 
            {
                text.map(e=><p>{e}</p>)
            }

            </div>
            <div className={s.buton}>
            <Button onClick={addText} variant="contained">Contained</Button>
            </div>
        </div>
    )
}

export default SetChangeClinicForm;