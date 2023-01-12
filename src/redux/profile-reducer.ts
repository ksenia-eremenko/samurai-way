import {
    v1
} from "uuid";
import { userAPI } from "../api/Api";
import { ActionsTypes } from "./types";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type PostType = {
    id?: string,
    message: string
    likeCount: number
    avatar: string
}

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileDataType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileDataType | null
}
export const initialState = {
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
    newPostText: "",
    profile: null
}

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
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
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
export const setUserProfile = (profile: ProfileDataType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
};
export const getUserProfile = (userId: number) => (dispatch: any) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
};

export default profileReducer;