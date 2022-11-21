import React from 'react'
import { NavLink } from 'react-router-dom'
import { DialogType } from '../../../redux/state'
import s from './DialogItem.module.scss'

export const DialogItem = ({id, name}: DialogType) => {
    
    return (
        <div className={s.dialog_item}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}