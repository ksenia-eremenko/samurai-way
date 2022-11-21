import React from 'react'
import { ProfilePageType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  profileState: ProfilePageType
  dispatch: (action: any) => void
}

export const Profile = ({ profileState, dispatch }: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        posts={profileState.posts}
        dispatch={dispatch}
        newPostText={profileState.newPostText}
      />
    </div>
  )
}