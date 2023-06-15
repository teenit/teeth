import React, { useState } from "react";
import s from "./auth.module.css";
import ForgetCode from "./ForgetCode";
const ForgetForm = () => {
    const [auth, setAuth] = useState({ login: ""})
    const [code, setCode] = useState(true);
    const [error,setError] = useState({errorMes:"",error:true})
    function sendForm() {
       console.log(auth);
        setCode(false)
    }

    return code ? (
                <>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="login">Введіть email для відновлення паролю</label>
                    <input value={auth.login} type="text" name="login" id="login" onChange={(e) => {
                        let email = e.target.value.trim();
                        if(email.length > 5){
                            setError({...error,error:false})
                        }else{
                            setError({...error,error:true})
                        }
                        setAuth({ ...auth, login: email})
                    }} />
                </div>
                
                <div className={s.line__item}>
                        <button disabled = {error.error} className="btn" onClick={sendForm}>Надіслати</button>
                </div>
                
                </>
    ):(
        <ForgetCode email = {auth.login}/>
    )
}

export default ForgetForm;