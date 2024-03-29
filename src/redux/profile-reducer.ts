import { profileAPI } from './../api/Api';
import {
    v1
} from "uuid";
import { userAPI } from "../api/Api";
import { ActionsTypes } from "./types";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
    profile: ProfileDataType | null
    status: string
}
export const initialState: InitialStateType = {
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
    profile: null,
    status: ""
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: v1(),
                    message: action.newPostText,
                    likeCount: 4,
                    avatar: "https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg"
                }]
            }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({ type: ADD_POST, newPostText } as const);
export const setUserStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status: status
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
export const getUserStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        });
};
export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        });
};

export default profileReducer;