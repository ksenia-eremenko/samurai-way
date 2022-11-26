import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext'
import MyPosts from './MyPosts'
const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store: any) => {
                let state = store.getState();
                const addPostHandler = () => {
                    store.dispatch(addPostActionCreator(''));
                }
                const onChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return (
                    <MyPosts
                        addPost={addPostHandler}
                        updateNewPostText={onChangeHandler}
                        posts={state.profile.posts}
                        newPostText={state.profile.newPostText}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer