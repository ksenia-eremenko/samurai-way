
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.scss'
import { ProfilePropsType } from './MyPostsContainer';
import Post from './Post/Post'


const MyPosts = (props: ProfilePropsType) => {
    const addPostHandler = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.posts}>
            <AddNewPostFormRedux onSubmit={addPostHandler} />
            <div className={s.items}>
                {props.profile.posts.map(e => <Post message={e.message} key={e.id} likeCount={e.likeCount} avatar={e.avatar} />)}
            </div>
        </div>
    )
}

export default MyPosts

const AddNewPostForm = (props: any) => {
    return (
        <form className={s.newPost} onSubmit={props.handleSubmit}>
            <Field name='newPostText' component='textarea'/>
            <div className={s.btns}>
                <button
                >Add Post</button>
                {/* <button
                // onClick={removePostHandler}
                >Remove</button> */}
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'Profile add new post form' })(AddNewPostForm)