import {
    v1
} from "uuid"

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

const dialogsReducer = (state: any, action: any) => {
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
export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE })
export const updateNewMessageActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        textMessage: text
    }
}

export default dialogsReducer;