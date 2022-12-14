import {
    v1
} from "uuid"
import { ActionsTypes } from "./types";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

export type DialogType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: string,
    textMessage: string
}

const initialState = {
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
    ] as DialogType[],
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
    ] as MessagesType[],
    newMessageText: ""
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: v1(), textMessage: state.newMessageText }]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.textMessage
            }
        default:
            return state;
    }
}
export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE } as const);
export const updateNewMessageActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        textMessage: text
    } as const
}

export default dialogsReducer;