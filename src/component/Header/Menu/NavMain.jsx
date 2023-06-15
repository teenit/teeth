import React from "react";

import s from "./nav-main.module.css";
import logoImg from "./../../../img/logo_small_white.png";
import calImg from "./../../../img/icons/calendar-50.png";
import bookImg from "./../../../img/icons/bookmark-50.png";
import calcImg from "./../../../img/icons/calculator-50.png";
import searchImg from "./../../../img/icons/search-50.png";
import { NavLink } from "react-router-dom";

const NavMain = () => {
    return (
        <div className={s.nav__wrap}>
            <div className={s.nav__inner}>
                <div className={s.logo}>
                    <NavLink to="/"><img src={logoImg} alt="" /></NavLink>
                </div>
                <div className={s.nav}>
                    <div className={s.item}>
                        <NavLink to="/calendar" className={s.link}>
                            <span className={s.icon}>
                                <img src={calImg} alt="" />
                            </span>
                            <span className={s.title}>Календар</span>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/rozklad" className={s.link}>
                            <span className={s.icon}>
                                <img src={bookImg} alt="" />
                            </span>
                            <span className={s.title}>Розклад</span>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/rozrah" className={s.link}>
                            <span className={s.icon}>
                                <img src={calcImg} alt="" />
                            </span>
                            <span className={s.title}>Розрахунок</span>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/search" className={s.link}>
                            <span className={s.icon}>
                                <img src={searchImg} alt="" />
                            </span>
                            <span className={s.title}>Пошук</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMain;