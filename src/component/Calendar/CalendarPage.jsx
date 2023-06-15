import React, { useState } from "react";
import Calendar from "./Calendar";
import s from './calendar.module.css';
import CalendarUsers from "./CalendarUsers/CalendarUsers";
import ModalCalendar from "./CalendarGrid/ModalCalendar/ModalCalendar";
function testDataUser(){
    let masUsers = [
        {
            userName:"Васько Володимир Олександрович",
            imgUrl:"https://img.freepik.com/free-photo/male-doctor-with-face-mask-portrait_53876-105124.jpg",
            work:"Терапевт",
            color:"#892275",
            userID:34,
            month:2,
            year:2023,
            workTime:[
                {
                    start:"09:00",
                    end:"14:00",
                    day:7,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:10,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:19,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:22,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:25,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:30,
                    cabinet:1
                }
            ]
        },
        {
            userName:"Халімов Сегій",
            imgUrl:"https://i.pinimg.com/736x/94/d0/6b/94d06bd2ffd2fc05e6ccc6f5bc6337dc.jpg",
            work:"Хірург",
            color:"#897275",
            userID:35,
            month:2,
            year:2023,
            workTime:[
                {
                    start:"09:00",
                    end:"14:00",
                    day:7,
                    cabinet:2
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:10,
                    cabinet:2
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:19,
                    cabinet:2
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:22,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:25,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:30,
                    cabinet:1
                }
            ]
        },
        {
            userName:"Кліменко Ганна Вікторівна",
            imgUrl:"https://image.made-in-china.com/2f0j00yhmYduMPkRkj/Disposable-Surgical-Doctor-Face-Mask-Medical-Supply.jpg",
            work:"Терапевт",
            color:"#292275",
            userID:37,
            month:2,
            year:2023,
            workTime:[
                {
                    start:"09:00",
                    end:"14:00",
                    day:5,
                    cabinet:2
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:8,
                    cabinet:2
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:17,
                    cabinet:2
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:21,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:24,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:29,
                    cabinet:1
                }
            ]
        },
        {
            userName:"Тер Юлія Жаківна",
            imgUrl:"https://thumbs.dreamstime.com/z/woman-doctor-face-mask-young-cap-surgery-room-interior-39359443.jpg",
            work:"Терапевт",
            color:"#892215",
            userID:42,
            month:2,
            year:2023,
            workTime:[
                {
                    start:"09:00",
                    end:"14:00",
                    day:3,
                    cabinet:2
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:9,
                    cabinet:2
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:18,
                    cabinet:2
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:12,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:11,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:31,
                    cabinet:1
                }
            ]
        },
        {
            userName:"Жабов-Курочкин Валентин Семенович",
            imgUrl:"https://www.westend61.de/images/0001378627pw/mature-female-doctor-wearing-protective-face-mask-with-scrubs-at-clinic-JCMF00735.jpg",
            work:"Терапевт",
            color:"#492275",
            userID:13,
            month:2,
            year:2023,
            workTime:[
                {
                    start:"09:00",
                    end:"14:00",
                    day:3,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:9,
                    cabinet:1
                },
                {
                    start:"09:00",
                    end:"14:00",
                    day:18,
                    cabinet:1
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:12,
                    cabinet:2
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:11,
                    cabinet:2
                },
                {
                    start:"14:00",
                    end:"17:00",
                    day:31,
                    cabinet:2
                }
            ]
        },
    ]
    return masUsers;
}

const CalendarPage = ()=>{
    const [worker, setWorker] = useState({});
    const lookWorker = (user) => setWorker(user);
    const [users,setUsers] = useState(testDataUser());
    const [modal,setModal] = useState({
        show:false,
        momentTime:{},
        momentStart:{},
        activeDay:{
            class:''
        },
        worker:worker,
        users:users,
        newState:(argKey, argValue)=>setModalF(argKey, argValue),
        changeModal: (arg)=>{
            setModal({...arg})
        }
    })
    function setModalF(argKey, argValue){
        setModal({...modal,[argKey]:argValue})
    }
    return(
        <div className={s.wrap}>
        <div className={s.inner}>
            <div className={s.cal}>
                <Calendar modal = {modal} users = {users} worker={worker}/>
            </div>
        
            <CalendarUsers 
            users={users}
            worker={worker}
            lookWorker = {(user)=>{lookWorker(user)}}/>
            </div>
            {modal.show ? <ModalCalendar modal = {modal} /> : null}
        </div>
    )
}

export default CalendarPage;