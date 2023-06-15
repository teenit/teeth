import React from "react";
import { useState } from "react";
import Burger from "./Burger";
import s from "./menu.module.css"
import Nav from "./Nav";
import NavMain from "./NavMain";
const Menu = ()=>{
    const [active,setActive] = useState(false)
    return(
        <div className={s.wrap}>
            <div className={s.inner}>
            <NavMain />
            <div className={s.inner__burger}>
                <Burger active = {active} close={()=>{
                    setActive(!active)
                }}/>
            </div>
        </div>
        <Nav active = {active} close={()=>{
                    setActive(!active)
                }}/>
        </div>
    )
}
export default Menu;