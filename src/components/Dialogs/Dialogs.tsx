import React from 'react'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.scss'
import { DialogsPropsType } from './DialogsContainer'
import { Message } from './Message/Message'

export const Dialogs = ({ sendMessage, dialogs, isAuth }: DialogsPropsType) => {
    const dialogsElement = dialogs.dialogs.map(e => <DialogItem id={e.id} name={e.name} key={e.id} />);
    const messagesElement = dialogs.messages.map(e => <Message id={e.id} textMessage={e.textMessage} key={e.id} />);

    const addNewMessage = (values: any) => {
        sendMessage(values.message);
    }

    if (!isAuth) return <Navigate to={'/login'} />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>{dialogsElement}</div>
            <div className={s.messeges}>
                <div className={s.messages_items}>{messagesElement}</div>
                <AddMessegeFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}


export const AddMessegeForm = (props: any) => {

    return (
        <form className={s.add_messege} onSubmit={props.handleSubmit}>
            <Field
                name="message"
                component={'input'}
                placeholder="Введите сообщение"
            ></Field>
            <button>Add messege</button>
        </form>
    )
}

const AddMessegeFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessegeForm)
