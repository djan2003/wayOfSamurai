import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (

        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {name : "Vasia", id : 1},
        {name : "Petia", id : 2},
        {name : "Olia", id : 3},
        {name : "Kolia", id : 4},
        {name : "Oleg", id : 5}
    ]
    let dialogsElement = dialogsData.map(d => <DialogsItem name= {d.name} id={d.id}/>)
    let messageData = [
        {name : "Hi", id : 1},
        {name : "how are you", id : 2},
        {name : "every thing ok", id : 3}
    ]
    let messageElement = messageData.map(m => <div className={s.message}>{m.name}</div> )
    return (
        <div className={s.dialogs}>
            <div className={s.dialodsItem}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>

    )
}
export default Dialogs