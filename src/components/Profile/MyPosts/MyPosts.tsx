import React from 'react'
import s from './MyPosts.module.scss'
import Post from '../Post/Post'

const MyPosts = () => {
  return (
    <div className={s.posts}>
            <div className={s.newPost}>
                <textarea placeholder='Введите текст' value="Text" />
                <div className={s.btns}>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.items}>
                <Post message="Hi, how are you? " />
                <Post message="It's my first post" />
            </div>
        </div>
  )
}

export default MyPosts