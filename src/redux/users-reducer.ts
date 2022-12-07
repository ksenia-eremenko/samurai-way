import {
    v1
} from "uuid"
import { ActionsTypes, UsersPageType } from "./types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";

let initialState: UsersPageType = {
    users: []
}


const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => e.id === action.userId ? { ...e, followed: true } : e)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => e.id === action.userId ? { ...e, followed: false } : e)
            }
        case SETUSERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followAC = (userId: string) => ({ type: FOLLOW, userId } as const);
export const unFollowAC = (userId: string) => ({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: any) => ({ type: SETUSERS, users } as const);

export default usersReducer;