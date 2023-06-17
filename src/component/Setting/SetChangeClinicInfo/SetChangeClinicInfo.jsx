import React, { useState } from "react";
import SetChangeClinicModal from "./SetChangeClinicModal";
import s from './style.module.css';

const SetChangeClinicInfo = ()=>{

    const [state, setState] = useState({
        modal:false
    })
    
    return(    
        <div>
            <div>
                <h3>Внести зміни у загальні анкетні данні</h3>
            </div>
            
            <div>
                <button className="btn btn__max__content" onClick={()=>setState({...state,modal:true})}>Додати</button>
            </div>
            
            {state.modal ?<SetChangeClinicModal close = {()=>setState({...state,modal:false})} />:null} 
        </div>
        
    )
}

export default SetChangeClinicInfo;