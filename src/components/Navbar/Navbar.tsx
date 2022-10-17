import React from 'react'
import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <nav className={s.navigation}>
        <div className={s.item}>
          <a href='#1'>Profile</a>
        </div>
        <div className={s.item}>
          <a href='#2'>Messages</a>
        </div>
        <div className={s.item}>
          <a href='#3'>News</a>
        </div>
        <div className={s.item}>
          <a href='#4'>Music</a>
        </div>
      </nav>
    </div>
  )
}