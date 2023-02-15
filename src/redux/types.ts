import { setAuthUserData } from "./auth-reducer"
import { addNewMessageActionCreator } from "./dialogs-reducer"
import { addPostActionCreator, setUserProfile, setUserStatus } from "./profile-reducer"
import { followSucces, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, toggleIsFollowingProgress, unFollowSucces } from "./users-reducer"

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
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type setUserStatusType = ReturnType<typeof setUserStatus>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type FollowACType = ReturnType<typeof followSucces>
type UnFollowACType = ReturnType<typeof unFollowSucces>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalUsersType = ReturnType<typeof setTotalUserCount>
type SetIsFetchingType = ReturnType<typeof toggleIsFetching>
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
type setIsFollowingProgressType = ReturnType<typeof toggleIsFollowingProgress>

export type ProfileActionsTypes = AddPostActionType | SetUserProfileType | setUserStatusType
export type DialogsActionsTypes = AddNewMessageActionType
export type UsersActionsTypes = FollowACType | UnFollowACType | SetUsersACType | SetIsFetchingType | SetCurrentPageType | SetTotalUsersType | setIsFollowingProgressType
export type AuthActionsTypes = setAuthUserDataType

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes | AuthActionsTypes