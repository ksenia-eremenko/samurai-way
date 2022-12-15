import { addNewMessageActionCreator, updateNewMessageActionCreator } from "./dialogs-reducer"
import { addPostActionCreator, updateNewPostTextActionCreator } from "./profile-reducer"
import { followAC, setUsersAC, unFollowAC } from "./users-reducer"

export type RootStateType = {
    sidebar: SidebarType
    // users: UsersPageType
}
// export type UsersPageType = {
//     users: Array<UserType>
// }

// export type UserType = {
//     id: string
//     name: string
//     photos: {
//         small: string
//     }
//     followed: boolean
//     status: string
//     location: {
//         city: string
//         country: string
//     }
// }

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
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
export type ProfileActionsTypes = AddPostActionType | UpdateNewPostTextActionType
export type DialogsActionsTypes = AddNewMessageActionType | UpdateNewMessageActionType
export type UsersActionsTypes = FollowACType | UnFollowACType | SetUsersACType

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes
