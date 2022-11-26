import React, { KeyboardEvent } from 'react'
import { PostType } from '../../../redux/types'
import s from './MyPosts.module.scss'
import Post from './Post/Post'

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = ({ posts, newPostText, addPost, updateNewPostText }: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            addPost();
            updateNewPostText('');
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            updateNewPostText(text);
        }
    }

    const removePostHandler = () => {
        updateNewPostText('');
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            addPostHandler();
        }
    }

    return (
        <div className={s.posts}>
            <div className={s.newPost}>
                <textarea
                    placeholder='Введите текст'
                    value={newPostText}
                    ref={newPostElement}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <div className={s.btns}>
                    <button
                        onClick={addPostHandler}
                    >Add Post</button>
                    <button
                        onClick={removePostHandler}
                    >Remove</button>
                </div>
            </div>
            <div className={s.items}>
                {posts.map(e => <Post message={e.message} key={e.id} likeCount={e.likeCount} avatar={e.avatar} />)}
            </div>
        </div>
    )
}

export default MyPosts