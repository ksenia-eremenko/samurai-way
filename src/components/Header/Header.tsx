import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './Header.module.scss'

export const Header = (props: any) => {
  
  return (
    <header className={s.header}>
      <div className={s.logo}>LOGO</div>
      <div className={s.login}>
        {!props.isAuth ? <NavLink to={'/login'}><span>Login</span></NavLink> : <span>{props.login}</span>}
      </div>
    </header>
  )
}