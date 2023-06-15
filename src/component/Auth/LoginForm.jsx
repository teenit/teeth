import axios from "axios";
import React, { useState } from "react";
import s from "./auth.module.css";
const Login = () => {
    const [auth, setAuth] = useState({ login: "", pass: "" })
    function sendForm() {
        axios({
            url: "http://goody-bd/user/login.php",
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(auth),
        })
        .then((res)=>{ 
           console.log(res.data)
        })
        .catch((error)=>console.log(error));
    }

    return (
                <>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="login">Введіть логін</label>
                    <input type="text" name="login" id="login" onChange={(e) => {
                        setAuth({ ...auth, login: e.target.value })
                    }} />
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="pass">Введіть пароль</label>
                    <input type="password" name="pass" id="pass" onChange={(e) => {
                        setAuth({ ...auth, pass: e.target.value })
                    }} />
                </div>
                <div className={s.line__item}>
                        <button className="btn" onClick={sendForm}>Надіслати</button>
                </div>
                </>
    )
}

export default Login;