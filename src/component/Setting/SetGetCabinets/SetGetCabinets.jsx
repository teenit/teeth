import React, { useEffect, useState } from "react";
import s from './style.module.css';
import ModalWindow from "../../Modals/ModalWindow";
import closeGif from './../../../img/icons/close.gif'
import { Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { api } from "../../../functions/api";
import SetGetCabinet from "./SetGetCabinet";

const SetGetCabinets = ({close,clinic}) =>{
    const [state,setState] = useState({
        number:"",
        title:"",
        clinicID:clinic.id,
        clinicName:clinic.clinic.name
    })
    const [cabinets,setCabinets] = useState([]);
    const getCabinets = ()=>{
        api({clinicID:clinic.id},"manage/get-cabs-by-clinic-id.php").then((data)=>{
            setCabinets(data)
        })
    }
    useEffect(()=>{
        getCabinets();
    },[])

    const createCabinet = ()=>{
        api({...state},"manage/add-cabinet.php").then(data=>getCabinets())
    }
    return(
        <ModalWindow>
            <div className={s.wrap}>
                <div className={s.inner}>
                    <img className={s.close__btn} src={closeGif} alt="" onClick={close} />
                    <div className={s.add__cab}>
                        <p>Name of clinic {state.clinicName}</p>
                    <TextField 
                        label="title" 
                        value={state.title}
                        type="text"
                        onChange={(e)=>{setState({...state,title:e.target.value})}}
                        helperText="Enter name of cabinet"
                        variant="outlined"/>
                    <TextField 
                        label="number" 
                        value={state.number}
                        type="number"
                        onChange={(e)=>{setState({...state,number:e.target.value})}}
                        helperText="Enter number cabinet"
                        variant="outlined"/>
                    

                    <Button 
                        variant="contained"
                        endIcon={<Add />}                                              
                        onClick={createCabinet}>Create cabinet</Button>
                    </div>
                    <div className={s.cabs}>
                        {
                            cabinets.map((item,index)=>{
                                return(
                                   <SetGetCabinet key={item.id} cab = {item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </ModalWindow>
    )
}

export default SetGetCabinets;