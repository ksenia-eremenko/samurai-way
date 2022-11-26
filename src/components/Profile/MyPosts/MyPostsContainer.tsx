import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { StoreType } from '../../../redux/types'
import MyPosts from './MyPosts'

type MyPostsPropsType = {
    store: StoreType
}

const MyPostsContainer = ({ store }: MyPostsPropsType) => {
    let state = store.getState();

    const addPostHandler = () => {
        store.dispatch(addPostActionCreator(''));
    }

    const onChangeHandler = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts
        addPost={addPostHandler}
        updateNewPostText={onChangeHandler}
        posts={state.profile.posts}
        newPostText={state.profile.newPostText}
    />
}

export default MyPostsContainer