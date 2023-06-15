import axios from "axios";
import React, { useState } from "react";
import s from "./auth.module.css";
import ChangePass from "./ChangePass";
const ForgetCode = ({email}) => {
    const [auth, setAuth] = useState({ code: ""})
    const [change,setChange] = useState(true);
    function sendForm() {
        axios({
            url: "http://goody-bd/enter-code.php",
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(auth),
        })
        .then((res)=>{ 
           if(res.data){
            setChange(false)
           }
        })
        .catch((error)=>console.log(error));

    }
    

    return change ? (
                <>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="code">На email {email} надіслано код перевірки</label>
                    <input placeholder="Код перевірки" type="text" name="code" id="code" onChange={(e) => {
                        setAuth({ ...auth, code: e.target.value })
                    }} />
                </div>
                
                <div className={s.line__item}>
                        <button className="btn" onClick={sendForm}>Надіслати код</button>
                </div>
                </>
    ):(
        <ChangePass />
    )
}

export default ForgetCode;