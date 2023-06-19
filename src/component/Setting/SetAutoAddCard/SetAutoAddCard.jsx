import React, { useState } from "react";
import s from "./style.module.css"
import { CheckBox } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
const SetAutoAddCard= ()=>{
    const [active,setActive]=useState(true)
return (
    <div className={s.wrap}>
        <p>встановити автоматичне присвоєння номерів карток</p>
        <input type="checkbox"  className={s.input} onChange={()=>{
            setActive(!active)
        }}/>
        <p>введіть номер останньої картки</p>
        <TextField disabled={active}
  hiddenLabel
  type="number"
  id="filled-hidden-label-small"
  variant="filled"
  size="small"
/>
<div><Button variant="contained" className={s.button}   onClick={console.log()}>Зберегти</Button></div>
    </div>
    

)
    

}
export default SetAutoAddCard;