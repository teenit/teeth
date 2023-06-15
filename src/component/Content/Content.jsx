import React from "react";
import { Route, Routes } from 'react-router-dom';
import Auth from "../Auth/Auth";
import Home from "../Home/Home";
import Calendar from './../Calendar/Calendar';
import ControlPanel from './../ControlPanel/ControlPanel';
import Rozklad from './../Rozklad/Rozklad';
import Rozrah from './../Rozrah/Rozrah';
import Search from './../Search/Search';
import Setting from './../Setting/Setting';
import Statistic from './../Statistic/Statistic';
import s from "./content.module.css";
import AddPacient from "../AddPacient/AddPacient";
import CalendarPage from "../Calendar/CalendarPage";

const Content = ()=>{

    return (
        <div className="content">
        <Routes>
          <Route path='calendar' element={<CalendarPage />} />
          <Route path='rozklad' element={<Rozklad />} />
          <Route path='rozrah' element={<Rozrah />} />
          <Route path='search' element={<Search />} />
          <Route path='statistic' element={<Statistic />} />
          <Route path='setting' element={<Setting />} />
          <Route path='control-panel' element={<ControlPanel />} />
          <Route path="login" element = {<Auth />} />
          <Route path="add-pacient" element = {<AddPacient />}/>
          <Route index element={<Home />} />
        </Routes>
      </div>
    )
}

export default Content;