import React from "react";
import { NavLink } from "react-router-dom";
import s from "./menu.module.css";
import enterImg from "./../../../img/icons/enter-50.png";

const Nav = ({active, close})=>{

    return active ?(
        <div className={s.nav__wrap}>
            <div className={s.nav__first}>
                <div className={s.nav__black} onClick={close}></div>
            </div>
            <div className={s.nav__second}>
                <div className={s.wrap__nav__items}>
                    <div className={s.nav__items}>
                        <NavLink className={s.link__item} to="/">Нагадування</NavLink>
                        <NavLink className={s.link__item} to="/">Дні народження</NavLink>
                        <NavLink className={s.link__item} to="/">Замовлення препаратів</NavLink>
                        <NavLink className={s.link__item} to="/statistic">Статистика</NavLink>
                        <NavLink className={s.link__item} to="/control-panel">Панель керування</NavLink>
                        <NavLink className={s.link__item} to="/setting">Налаштування</NavLink>
                    </div>
                    <div className={s.control}>
                        <NavLink className={s.link__control}  to="/login" ><img className={s.img__control} src={enterImg} alt="Логінізації" title="Логінізації"  /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    ):null
}

export default Nav;