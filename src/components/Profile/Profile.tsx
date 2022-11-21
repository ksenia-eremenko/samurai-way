import React from 'react'
import { ProfilePageType } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  profileState: ProfilePageType
  // addPost: () => void
  // updateNewPostText: (textPost: string) => void
  dispatch: (action: any) => void
}


export const Profile = (props: ProfilePropsType) => {
  const { profileState, dispatch } = props;
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        posts={profileState.posts}
        dispatch={dispatch}
        newPostText={profileState.newPostText}
        // updateNewPostText={updateNewPostText}
      />
    </div>
  )
}