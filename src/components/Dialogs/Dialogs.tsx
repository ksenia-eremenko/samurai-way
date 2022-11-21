import React, { KeyboardEvent } from 'react'
import { DialogsPageType } from '../../redux/state'
import { AddMessege } from './AddMessege/AddMessege'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import { Message } from './Message/Message'

type DialogsPropsType = {
    dialogsState: DialogsPageType
    // addNewMessage: () => void
    // updateNewMessage: (textMessage: string) => void
    dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const { dialogsState, dispatch } = props;

    const dialogsElement = dialogsState.dialogs.map(e => <DialogItem id={e.id} name={e.name} key={e.id} />);
    const messagesElement = dialogsState.messages.map(e => <Message id={e.id} textMessage={e.textMessage} key={e.id} />);

    let newPostElement = React.createRef<HTMLInputElement>();

    const addMessageHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            if (text.trim()) {
                dispatch({type: 'ADD_NEW_MESSAGE'})
                dispatch({type: 'UPDATE_NEW_MESSAGE', textMessage: text})
            }
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            dispatch({type: 'UPDATE_NEW_MESSAGE', textMessage: text})
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
                <AddMessege addMessageHandler={addMessageHandler} onChangeHandler={onChangeHandler} value={props.dialogsState.newMessageText} onKeyPressHandler={onKeyPressHandler} newPostElement={newPostElement} />
            </div>
        </div>
    )
}