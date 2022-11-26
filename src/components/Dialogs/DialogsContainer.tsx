import React from 'react'
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer'
import { StoreType } from '../../redux/types'
import { Dialogs } from './Dialogs'

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = ({ store }: DialogsPropsType) => {
    let state = store.getState().dialogs;

    const addMessageHandler = () => {
        store.dispatch(addNewMessageActionCreator(''))
        store.dispatch(updateNewMessageActionCreator(''))
    }
    const onChangeHandler = (text: string) => {
        store.dispatch(updateNewMessageActionCreator(text))
    }   

    return <Dialogs updateNewMessage={onChangeHandler} sendMessage={addMessageHandler} dialogsPage={state}/>
}