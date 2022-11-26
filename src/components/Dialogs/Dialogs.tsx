import React, { KeyboardEvent } from 'react'
import { DialogsPageType } from '../../redux/types'
import { AddMessege } from './AddMessege/AddMessege'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import { Message } from './Message/Message'

type DialogsPropsType = {
    updateNewMessage: (text: string) => void
    sendMessage: (text: string) => void
    dialogsPage: DialogsPageType
}

export const Dialogs = ({ updateNewMessage, sendMessage, dialogsPage }: DialogsPropsType) => {
    let state = dialogsPage;

    const dialogsElement = state.dialogs.map(e => <DialogItem id={e.id} name={e.name} key={e.id} />);
    const messagesElement = state.messages.map(e => <Message id={e.id} textMessage={e.textMessage} key={e.id} />);

    let newPostElement = React.createRef<HTMLInputElement>();
    const addMessageHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            if (text.trim()) {
                sendMessage('');
            }
        }
    }
    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            updateNewMessage(text);
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addMessageHandler();
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>{dialogsElement}</div>
            <div className={s.messeges}>
                <div className={s.messages_items}>{messagesElement}</div>
                <AddMessege
                    addMessageHandler={addMessageHandler}
                    onChangeHandler={onChangeHandler}
                    value={state.newMessageText}
                    onKeyPressHandler={onKeyPressHandler}
                    newPostElement={newPostElement}
                />
            </div>
        </div>
    )
}