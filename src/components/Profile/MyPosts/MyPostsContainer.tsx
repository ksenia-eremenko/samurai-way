import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addPostActionCreator, InitialStateType } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/redux-store'
import MyPosts from './MyPosts'

type MapStateToPropsType = {
    profile: InitialStateType
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profile,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer