import {
    v1
} from "uuid";
import { ActionsTypes, ProfilePageType } from "./types";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                message: state.newPostText,
                likeCount: 4,
                avatar: "https://vjoy.cc/wp-content/uploads/2020/10/2e91c881628ae39e9d7f66a9740f08c0.jpg"
            };
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.textPost;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (text: string) => {
    return {
        type: ADD_POST,
        newPostText: text
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        textPost: text
    } as const
}


export default profileReducer;