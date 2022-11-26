import React from 'react'
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import { Dialogs } from './Dialogs'

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store: any) => {
            let state = store.getState().dialogs;
            const addMessageHandler = () => {
                store.dispatch(addNewMessageActionCreator(''))
                store.dispatch(updateNewMessageActionCreator(''))
            }
            const onChangeHandler = (text: string) => {
                store.dispatch(updateNewMessageActionCreator(text))
            }
            return <Dialogs updateNewMessage={onChangeHandler} sendMessage={addMessageHandler} dialogsPage={state} />
        }}
    </StoreContext.Consumer>
}