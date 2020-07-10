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

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(d => <DialogsItem name= {d.name} id={d.id}/>)

    let messageElement = props.messageData.map(m => <div className={s.message}>{m.name}</div> )
    let addMessage = ()=>{props.dispatch({type: "addMessage"})
    }
    let newMessageElement = React.createRef()
    let onMessageChange = ()=>{
        let text = newMessageElement.current.value;
        props.dispatch({type: "updateNewMessage" ,newMessage:text});
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialodsItem}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} value = {props.newMessageText}></textarea >
            </div>
            <div>
                <button onClick={addMessage}>Добавить сообщение</button>
            </div>
        </div>

    )
}
export default Dialogs