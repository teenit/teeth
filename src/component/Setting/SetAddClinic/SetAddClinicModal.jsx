import React, { useState } from "react";
import SetAddClinicForm from "./SetAddClinicForm";
import ModalWindow from "../../Modals/ModalWindow";
import s from './style.module.css'

const SetAddClinicModal = ({close})=>{
    
    return(
        <ModalWindow>
            <div className={s.wrap}>
                <SetAddClinicForm close={close} />
            </div>  
        </ModalWindow>
    )
}

export default SetAddClinicModal;