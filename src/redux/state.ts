import { v1 } from "uuid"
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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
    dispatch: (action: any) => void
}

const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Vitya"
                },
                {
                    id: 2,
                    name: "Sveta"
                },
                {
                    id: 3,
                    name: "Ira"
                },
                {
                    id: 4,
                    name: "Petya"
                },
                {
                    id: 5,
                    name: "Vityaa"
                },
                {
                    id: 6,
                    name: "Valera"
                }
            ],
            messages: [
                {
                    id: v1(),
                    textMessage: "Hi, how are you?"
                },
                {
                    id: v1(),
                    textMessage: "textMessage #2"
                },
                {
                    id: v1(),
                    textMessage: "textMessage #3"
                },
                {
                    id: v1(),
                    textMessage: "textMessage #4"
                },
                {
                    id: v1(),
                    textMessage: "textMessage #5"
                },
                {
                    id: v1(),
                    textMessage: "textMessage #6"
                }
            ],
            newMessageText: ""
        },
        profilePage: {
            posts: [
                {
                    id: v1(),
                    message: "Hi, how are you?",
                    likeCount: 3,
                    avatar: "https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg"
                },
                {
                    id: v1(),
                    message: "It's my first post",
                    likeCount: 5,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ROHOs5ZvYMsZOteE5Sz4EPUDSqt5PTmjDA&usqp=CAU"
                },
                {
                    id: v1(),
                    message: "Hi, how are you?",
                    likeCount: 4,
                    avatar: "https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg"
                },
                {
                    id: v1(),
                    message: "It's my first post",
                    likeCount: 2,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFk2wFItm6SZ1Nk7BIFYiZY9Qi7e5enjCkPQ&usqp=CAU"
                }
            ],
            newPostText: ""
        },
        sidebar: {
            menu: [

            ]
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
export default store;

//  window.store = store;