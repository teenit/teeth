import React from "react";
import s from "./header.module.css"
import Menu from "./Menu/Menu";
const Header = ()=>{

    return(
        <header className={s.header}>
            <Menu />
        </header>
    )
}

export default Header;