import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}