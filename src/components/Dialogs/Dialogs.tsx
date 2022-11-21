import React, { KeyboardEvent } from 'react'
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer'
import { ActionsTypes, DialogsPageType } from '../../redux/state'
import { AddMessege } from './AddMessege/AddMessege'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import { Message } from './Message/Message'

type DialogsPropsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = ({ dialogsState, dispatch }: DialogsPropsType) => {

    const dialogsElement = dialogsState.dialogs.map(e => <DialogItem id={e.id} name={e.name} key={e.id} />);
    const messagesElement = dialogsState.messages.map(e => <Message id={e.id} textMessage={e.textMessage} key={e.id} />);

    let newPostElement = React.createRef<HTMLInputElement>();

    const addMessageHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            if (text.trim()) {
                dispatch(addNewMessageActionCreator(text))
                dispatch(updateNewMessageActionCreator(''))
            }
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            dispatch(updateNewMessageActionCreator(text))
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
                <AddMessege addMessageHandler={addMessageHandler} onChangeHandler={onChangeHandler} value={dialogsState.newMessageText} onKeyPressHandler={onKeyPressHandler} newPostElement={newPostElement} />
            </div>
        </div>
    )
}