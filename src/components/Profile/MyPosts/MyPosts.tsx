import React, { KeyboardEvent } from 'react'
import s from './MyPosts.module.scss'
import { ProfilePropsType } from './MyPostsContainer';
import Post from './Post/Post'


const MyPosts = (props: ProfilePropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.addPost();
            props.updateNewPostText('');
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

    const removePostHandler = () => {
        props.updateNewPostText('');
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
                    value={props.profile.newPostText}
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
                {props.profile.posts.map(e => <Post message={e.message} key={e.id} likeCount={e.likeCount} avatar={e.avatar} />)}
            </div>
        </div>
    )
}

export default MyPosts