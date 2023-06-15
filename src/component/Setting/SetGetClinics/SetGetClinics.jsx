import React, { useEffect, useState } from "react";
import { api } from "../../../functions/api";
import SetGetClinic from "./SetGetClinic";

const SetGetClinics = ()=>{
    const [state, setState] = useState([])
    
    useEffect(()=>{
        api({},"manage/get-all-clinics.php").then(e=>setState(e))
    },[])

    return(
        <div>
            {
                state.map((item)=>{
                    return <SetGetClinic item={item} key={item.id}/>
                })
            }
           
        </div>
    )
}

export default SetGetClinics;