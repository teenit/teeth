import React, { useState } from "react";
import SetChangeClinicForm from "./SetChangeClinicForm";
import ModalWindow from "../../Modals/ModalWindow";
import s from './style.module.css'

const SetChangeClinicModal = ({close})=>{
    
    return(
        <ModalWindow>
            <div className={s.wrap}>
                <SetChangeClinicForm close={close} />
            </div>  
        </ModalWindow>
    )
}

export default SetChangeClinicModal;