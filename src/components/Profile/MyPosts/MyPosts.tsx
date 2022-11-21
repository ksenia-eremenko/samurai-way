import React, { KeyboardEvent } from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { PostType } from '../../../redux/state'
import s from './MyPosts.module.scss'
import Post from './Post/Post'

type MyPostsPropsType = {
    posts: PostType[]
    dispatch: (action: any) => void
    newPostText: string
}

const MyPosts = ({ posts, dispatch, newPostText }: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            if (text.trim()) {
                dispatch(addPostActionCreator(text));
                dispatch(updateNewPostTextActionCreator(''));
            }
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            dispatch(updateNewPostTextActionCreator(text));
        }
    }

    const removePostHandler = () => {
        dispatch(updateNewPostTextActionCreator(''));
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