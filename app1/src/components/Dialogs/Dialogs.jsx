import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    

    let dialogsElements = props.store.getState().dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.store.getState().messagesData
        .map( message => <Message message={message.message} />);

    let newMessageBody = props.store.getState().newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;