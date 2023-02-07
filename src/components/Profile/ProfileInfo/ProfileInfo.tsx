import React from 'react'
import { ProfileDataType } from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import s from './ProfileInfo.module.scss'

type ProfileInfoType = {
    profile: ProfileDataType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.photo}>
                <img src="https://kartinkin.net/uploads/posts/2021-04/thumbs/1617584988_23-p-fon-dlya-saita-temnii-23.jpg" alt="" />
            </div>
            <div className={s.profileInfo}>
                <div className={s.image}>
                    <img src={props.profile.photos.small} alt="" />
                </div>
                <div className={s.info}>
                    <div className={s.left}>
                        <div className={s.item}>{props.profile.fullName}</div>
                        <div className={`${s.item} ${s.quote}`}>{props.profile.lookingForAJobDescription}</div>
                        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                    </div>
                    <div className={s.right}>
                        <div className={s.jobStatus}>
                            {(props.profile.lookingForAJob) ? <span className={s.red}></span> : <span className={s.green}></span>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo