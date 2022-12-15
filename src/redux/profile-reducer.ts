import {
    v1
} from "uuid";
import { ActionsTypes } from "./types";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export type PostType = {
    id?: string,
    message: string
    likeCount: number
    avatar: string
}

const initialState = {
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
}
export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    let stateCopy = { ...state }
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: v1(),
                    message: stateCopy.newPostText,
                    likeCount: 4,
                    avatar: "https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg"
                }]
            }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.textPost }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST } as const);
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        textPost: text
    } as const
};


export default profileReducer;