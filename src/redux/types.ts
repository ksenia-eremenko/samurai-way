import { addNewMessageActionCreator, updateNewMessageActionCreator } from "./dialogs-reducer"
import { addPostActionCreator, setUserProfile, updateNewPostTextActionCreator } from "./profile-reducer"
import { follow, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, unFollow } from "./users-reducer"

export type RootStateType = {
    sidebar: SidebarType
}
export type SidebarType = {}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
type AddNewMessageActionType = ReturnType<typeof addNewMessageActionCreator>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageActionCreator>
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type FollowACType = ReturnType<typeof follow>
type UnFollowACType = ReturnType<typeof unFollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersType = ReturnType<typeof setTotalUserCount>
type SetIsFetchingType = ReturnType<typeof toggleIsFetching>

export type ProfileActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileType
export type DialogsActionsTypes = AddNewMessageActionType | UpdateNewMessageActionType
export type UsersActionsTypes = FollowACType | UnFollowACType | SetUsersACType | SetIsFetchingType | SetCurrentPageType | SetTotalUsersType

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes