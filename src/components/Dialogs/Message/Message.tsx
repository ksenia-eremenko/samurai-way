import React from 'react'
import { MessagesType } from '../../../redux/dialogs-reducer'
import s from './Message.module.scss'

export const Message = ({ id, textMessage }: MessagesType) => {

  return (
    <div className={s.message_item + ' ' + id}>{textMessage}</div>
  )
}