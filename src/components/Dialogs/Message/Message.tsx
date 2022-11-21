import React from 'react'
import { MessagesType } from '../../../redux/state'
import s from './Message.module.scss'

export const Message = (props: MessagesType) => {
  const { id, textMessage } = props;

  return (
    <div className={s.message_item + ' ' + id}>{textMessage}</div>
  )
}