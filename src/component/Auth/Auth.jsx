import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import s from "./auth.module.css";
import ForgetForm from "./ForgetForm";
const Auth = ()=>{
    const [show, setShow] = useState({
        login:true,
        register:false,
        forget:false
    })
    return(
        <div className={s.form__wrap}>
            <div className={s.inner}>   
            {!show.forget ? <h2 className={s.title__form}><span className={show.login ? s.active : null} onClick={()=>{
                setShow({
                    login:true,
                    register:false,
                    forget:false
                })
            }}>Авторизація</span> / <span className={show.register ? s.active : null}  onClick={()=>{
                setShow({
                    login:false,
                    register:true,
                    forget:false
                })
            }}>Реєстрація</span></h2>:<h2 className={s.title__form}>
                <span className={show.forget ? s.active : null}>Відновлення</span>
                </h2>}
            {show.login ? <LoginForm /> : null}
            {show.register ? <RegistrationForm /> : null}
            {show.forget ? <ForgetForm /> : null}
            
            <p className={s.forget__p}>Забули пароль? <span className={show.forget ? s.active : null}  onClick={()=>{
                setShow({
                    login:false,
                    register:false,
                    forget:true
                })
            }}>Відновити</span></p>
        </div>
        
        </div>
    )
}

export default Auth;