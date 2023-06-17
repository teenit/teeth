import React, { useState } from "react";
import SetAddClinicModal from "./SetAddClinicModal";
import s from './style.module.css';

const SetAddClinic = ()=>{

    const [state, setState] = useState({
        modal:false
    })
    
    return(    
        <div>
            <div>
                <h3>Додати нову клініку</h3>
            </div>
            
            <div>
                <button className="btn btn__max__content" onClick={()=>setState({...state,modal:true})}>Додати</button>
            </div>
            
            {state.modal ?<SetAddClinicModal close = {()=>setState({...state,modal:false})} />:null} 
        </div>
        
    )
}

export default SetAddClinic;