import React from 'react'
import s from './Post.module.scss'

type PostType = {
    message: string
}

const Post = (props: PostType) => {
  return (
    <div className={s.item}>
            <div className={s.left}>
                <div className={s.avatar}>
                    <img src="https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg" alt="" />
                </div>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.likes}>
                <div className={s.image}>
                    <img src="https://noblefox.ru/wp-content/uploads/2019/06/like-2019.png" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Post