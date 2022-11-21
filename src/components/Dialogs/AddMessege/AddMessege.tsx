import React, { ChangeEvent, KeyboardEvent, RefObject } from 'react'
import s from './AddMessege.module.scss'

type AddMessagePropsType = {
  addMessageHandler: () => void
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
  newPostElement: RefObject<HTMLInputElement>
}

export const AddMessege = (props: AddMessagePropsType) => {
  const { addMessageHandler, onChangeHandler, value, onKeyPressHandler, newPostElement } = props;

  return (
    <div className={s.add_messege}>
      <input placeholder="Введите сообщение" value={value} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} ref={newPostElement}></input>
      <button onClick={addMessageHandler}>Add messege</button>
    </div>
  )
}