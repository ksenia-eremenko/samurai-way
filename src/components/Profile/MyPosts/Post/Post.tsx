import React from 'react'
import { PostType } from '../../../../redux/state'
import s from './Post.module.scss'

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <div className={s.left}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.likes}>
                <div className={s.image}>
                    <img src="https://noblefox.ru/wp-content/uploads/2019/06/like-2019.png" alt="" />
                </div>
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post