import { addNewMessageActionCreator, updateNewMessageActionCreator } from "./dialogs-reducer"
import { addPostActionCreator, updateNewPostTextActionCreator } from "./profile-reducer"

export type RootStateType = {
    profile: ProfilePageType
    dialogs: DialogsPageType
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: string,
    textMessage: string
}

export type PostType = {
    id?: string,
    message: string
    likeCount: number
    avatar: string
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
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type ProfileActionsTypes = AddPostActionType | UpdateNewPostTextActionType
export type DialogsActionsTypes = AddNewMessageActionType | UpdateNewMessageActionType

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes;
