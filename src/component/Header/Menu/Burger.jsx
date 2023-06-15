import React from "react";
import s from "./menu.module.css";
const Burger = ({active, close})=>{

    return (
        <div className={`${s.burger} ${active ? s.active : null}`} onClick={close}>
            <span className={`${s.span} ${s.s1}`}></span>
            <span className={`${s.span} ${s.s2}`}></span>
            <span className={`${s.span} ${s.s3}`}></span>
            <span className={`${s.span} ${s.s4}`}></span>
        </div>
    )
}

export default Burger;