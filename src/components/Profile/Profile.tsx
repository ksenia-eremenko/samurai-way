import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export const Profile = (props: any) => {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  )
}