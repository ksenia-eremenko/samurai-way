import React from 'react'
import { StoreType } from '../../redux/types'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
  store: StoreType
}

export const Profile = ({ store }: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer
        store={store}
      />
    </div>
  )
}