import React from 'react'
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
  return (
    <div className={s.profileInfoWrapper}>
            <div className={s.photo}>
                <img src="https://kartinkin.net/uploads/posts/2021-04/thumbs/1617584988_23-p-fon-dlya-saita-temnii-23.jpg" alt="" />
            </div>
            <div className={s.profileInfo}>
                <div className={s.image}>
                    <img src="https://kartinkin.net/uploads/posts/2022-03/1646322729_4-kartinkin-net-p-derzkie-kartinki-na-avu-4.jpg" alt="" />
                </div>
                <div className={s.info}>
                    <div className={s.item}>Lucile Kärt</div>
                    <div className={s.item}>01.01.1996</div>
                    <div className={`${s.item} ${s.country}`}>Great Britain</div>
                </div>
            </div>
        </div>
  )
}

export default ProfileInfo