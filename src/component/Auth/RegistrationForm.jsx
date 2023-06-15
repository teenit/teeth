import axios from "axios";
import React, { useState } from "react";
import s from "./auth.module.css";


function checkStr(str,max){
    if(str.length < max){
        return {
                error:true,
                errorMes:"Недостатня кількість символів"
            }
    }
    else{
        return {
            error:false,
            errorMes:""
        }
    }
   
}

const RegistrationForm = ()=>{
    function sendForm(){
        if( register.name.error || 
            register.surname.error || 
            register.secondName.error ||
            register.login.error ||
            register.email.error ||
            register.work.error ||
            register.bio.error ||
            register.phone.error ||
            register.sex.error ||
            register.happy.error ||
            register.secretKey.error ||
            register.pass.error ||
            register.passToo.error){

                return alert("Є помилка в заповненні форми реєстрації")
            }
            let obj = {
                name:register.name.value,
                surname:register.surname.value,
                secondName:register.secondName.value,
                login:register.login.value,
                email:register.email.value,
                work:register.work.value,
                bio:register.bio.value,
                phone:register.phone.value,
                sex:register.sex.value,
                happy:register.happy.value,
                secretKey:register.secretKey.value,
                pass:register.pass.value
            }
        axios({
            url: "http://goody-bd/user/register.php",
            method: "POST",
            header : {'Content-Type': 'application/json;charset=utf-8'},
            data : JSON.stringify(obj),
        })
        .then((res)=>{ 
           alert(res.data.message);
        })
        .catch((error)=>console.log(error));
    }
    const [register, setRegister] = useState({
        name:{
            require:true,
            error:true,
            value:"",
            errorMes:"",
            maxStr:1
        },
        surname:{require:true,error:true,value:"",errorMes:"",maxStr:2},
        secondName:{require:false,error:false,value:"",errorMes:"",maxStr:5},
        login:{require:true,error:true,value:"",errorMes:"",maxStr:7},
        email:{require:true,error:true,value:"",errorMes:"",maxStr:6},
        work:{require:true,error:true,value:"",errorMes:"",maxStr:3},
        bio:{require:false,error:false,value:"",errorMes:"",maxStr:15},
        phone:{require:true,error:true,value:"",errorMes:"",maxStr:10},
        sex:{require:false,error:false,value:"0",errorMes:"",maxStr:1},
        happy:{require:true,error:true,value:"",errorMes:"",maxStr:6},
        secretKey:{require:true,error:true,value:"",errorMes:"",maxStr:1},
        pass:{require:true,error:true,value:"",errorMes:"",maxStr:6},
        passToo:{require:true,error:true,value:"",errorMes:"",maxStr:6},
    })

    return(
            <>
                
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userName">Введіть Ім'я {register.name.require ? <span className={s.needs} />:null}</label>
                    <input value={register.name.value} type="text" name="userName" id="userName" onChange={(e) => {    
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.name.maxStr);
                        setRegister({
                            ...register,
                            name:{
                                ...register.name,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        })
                    }} />
                    {register.name.error ? <p className={s.error}>{register.name.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userSurname" >Прізвише {register.surname.require ? <span className={s.needs} />:null}</label>
                    <input type="text" name="userSurname" id="userSurname" onChange={(e) => {    
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.surname.maxStr);
                        console.log(register.surname.maxStr)
                        setRegister({
                            ...register,
                            surname:{
                                ...register.surname,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        }) 
                    }}  />
                   {register.surname.error ? <p className={s.error}>{register.surname.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userSecondName">По батькові {register.secondName.require ? <span className={s.needs} />:null}</label>
                    <input type="text" name="userSecondName" id="userSecondName" onChange={(e) => {   
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.secondName.maxStr);
                        setRegister({
                            ...register,
                            secondName:{
                                ...register.secondName,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        }) 
                    }} />
                    {register.secondName.error ? <p className={s.error}>{register.secondName.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userLogin">Введіть Логін{register.login.require ? <span className={s.needs} />:null}</label>
                    <input type="text" name="userLogin" id="userLogin" onChange={(e) => {   
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.login.maxStr);
                        setRegister({
                            ...register,
                            login:{
                                ...register.login,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        })   
                    }}  />
                    {register.login.error ? <p className={s.error}>{register.login.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userEmail">Введіть E-mail{register.email.require ? <span className={s.needs} />:null}</label>
                    <input type="email" name="userEmail" id="userEmail" onChange={(e) => {  
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.email.maxStr);
                        setRegister({
                            ...register,
                            email:{
                                ...register.email,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        })  
                    }}  />
                   {register.email.error ? <p className={s.error}>{register.email.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userWork">Введіть Посада{register.work.require ? <span className={s.needs} />:null}</label>
                    <input type="text" name="userWork" id="userWork" onChange={(e) => {   
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.work.maxStr);
                        setRegister({
                            ...register,
                            work:{
                                ...register.work,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        }) 
                    }} />
                   {register.work.error ? <p className={s.error}>{register.work.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userBIO">Введіть Біографічні дані{register.bio.require ? <span className={s.needs} />:null}</label>
                    <textarea name="userBIO" id="userBIO" cols="30" rows="10"  onChange={(e) => {   
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.bio.maxStr);
                        setRegister({
                            ...register,
                            bio:{
                                ...register.bio,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        })
                    }} ></textarea>
                    {register.bio.error ? <p className={s.error}>{register.bio.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userPhone">Введіть Номер телефону{register.phone.require ? <span className={s.needs} />:null}</label>
                    <input type="text" name="userPhone" id="userPhone" onChange={(e) => {     
                         let valueNew = e.target.value.replaceAll("  "," ");
                         let errorCheck = checkStr(valueNew,register.phone.maxStr);
                         setRegister({
                             ...register,
                             phone:{
                                 ...register.phone,
                                 value:valueNew,
                                 error:errorCheck.error,
                                 errorMes:errorCheck.errorMes
                             }
                         })
                    }} />
                    {register.phone.error ? <p className={s.error}>{register.phone.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userSex">Оберіть стать{register.sex.require ? <span className={s.needs} />:null}</label>
                    <select name="userSex" id="userSex" onChange={(e) => {     
                         setRegister({...register,sex:{...register.sex,value:e.target.value}}) 
                    }}>
                        <option value="0">Обрати стать</option>
                        <option value="man">Чоловіча</option>
                        <option value="woman">Жіноча</option>
                        <option value="other">Інша</option>
                    </select>
                    {register.sex.error ? <p className={s.error}>{register.sex.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userHappy">Оберіть Дату народження{register.happy.require ? <span className={s.needs} />:null}</label>
                    <input type="date" name="userHappy" id="userHappy" onChange={(e) => {     
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.happy.maxStr);
                        setRegister({
                            ...register,
                            happy:{
                                ...register.happy,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        })
                    }} />
                    {register.happy.error ? <p className={s.error}>{register.happy.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="secretKey">Введіть секретний ключ{register.secretKey.require ? <span className={s.needs} />:null}</label>
                    <input type="text" name="secretKey" id="secretKey" onChange={(e) => {     
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorCheck = checkStr(valueNew,register.secretKey.maxStr);
                        setRegister({
                            ...register,
                            secretKey:{
                                ...register.secretKey,
                                value:valueNew,
                                error:errorCheck.error,
                                errorMes:errorCheck.errorMes
                            }
                        })
                    }} />
                    {register.secretKey.error ? <p className={s.error}>{register.secretKey.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userPass">Введіть пароль{register.pass.require ? <span className={s.needs} />:null}</label>
                    <input type="password" name="userPass" id="userPass" onChange={(e) => {
                          let valueNew = e.target.value.replaceAll("  "," ");
                          let errorCheck = checkStr(valueNew,register.pass.maxStr);
                          setRegister({
                              ...register,
                              pass:{
                                  ...register.pass,
                                  value:valueNew,
                                  error:errorCheck.error,
                                  errorMes:errorCheck.errorMes
                              }
                          })
                        
                    }} />
                   {register.pass.error ? <p className={s.error}>{register.pass.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                    <label className={s.label} htmlFor="userPassToo">Введіть пароль повторно{register.passToo.require ? <span className={s.needs} />:null}</label>
                    <input type="password" name="userPassToo" id="userPassToo" onChange={(e) => {
                        let valueNew = e.target.value.replaceAll("  "," ");
                        let errorBool = false;
                        let errorMes = "";
                        if(valueNew !== register.pass.value){
                            errorBool = true;
                            errorMes = "Паролі не збігаються";
                        }

                        setRegister({
                            ...register,
                            passToo:{
                                ...register.passToo,
                                value:valueNew,
                                error:errorBool,
                                errorMes:errorMes
                            }
                        })
                        
                    }} />
                   {register.passToo.error ? <p className={s.error}>{register.passToo.errorMes}</p>:null}
                </div>
                <div className={s.line__item}>
                        <button className="btn" onClick={sendForm}>Надіслати</button>
                </div>
                </>
    )
}

export default RegistrationForm;