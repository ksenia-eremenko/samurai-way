import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { RootStateType } from '../../../redux/types'
import MyPosts from './MyPosts'


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer