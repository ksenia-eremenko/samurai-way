import {
    v1
} from "uuid"
import { ActionsTypes, DialogsPageType } from "./types";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const newMessage = {
                id: v1(),
                textMessage: state.newMessageText
            };
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.textMessage;
            return state;
        default:
            return state;
    }
}
export const addNewMessageActionCreator = (text: string) => {
    return {
        type: ADD_NEW_MESSAGE,
        newMessageText: text
    } as const
}
export const updateNewMessageActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        textMessage: text
    } as const
}

export default dialogsReducer;