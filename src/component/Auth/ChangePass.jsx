import React, { useState } from "react";
import s from "./auth.module.css";
const ChangePass = ({email,code,hash}) => {
    const [auth, setAuth] = useState({ pass:"",passToo:""});
    const [lookPass,setLookPass] = useState(false);
    function sendForm() {
        console.log(auth)
        window.alert("Пароль успішно змінено");
        window.location.reload();
    }

    return (
                <>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="pass">Введіть новий пароль</label>
                    <input type={lookPass ? "text" : "password"} name="pass" id="pass" onChange={(e) => {
                        setAuth({ ...auth, pass: e.target.value })
                    }} />
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="passToo">Введіть пароль повторно</label>
                    <input type={lookPass ? "text" : "password"} name="passToo" id="passToo" onChange={(e) => {
                        setAuth({ ...auth, passToo: e.target.value })
                    }} />
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="look">
                        <input type="checkbox" name="look" id="look" onChange={(e) => {setLookPass(e.target.checked)}} /> 
                    Показати пароль</label>
                    
                </div>
                <div className={s.line__item}>
                        <button className="btn" onClick={sendForm}>Встановити новий пароль</button>
                </div>
                </>
    )
}

export default ChangePass;