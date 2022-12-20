import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <nav className={s.navigation}>
        <div className={s.item}>
          <NavLink to='/profile/' className='link'>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs/' className='link'>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' className='link'>Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className='link'>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className='link'>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className='link'>Settings</NavLink>
        </div>
      </nav>
    </div>
  )
}