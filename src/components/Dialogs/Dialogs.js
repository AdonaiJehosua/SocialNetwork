import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messagesData.map(messageObj => <MessageItem message={messageObj.message}/>)

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage)
    }

    return (
        <div className={styles.dialogsPage}>
            <div className={styles.dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.messagesBlock}>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <div className={styles.newMessageBlock}>
                <textarea className={styles.newMessageTextArea}
                          onChange={onMessageChange}
                          value={state.newMessageText}/>
                    <button onClick={addMessage} className={styles.sendNewMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs