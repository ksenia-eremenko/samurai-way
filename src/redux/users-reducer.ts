import { ActionsTypes } from "./types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";

export type UserType = {
    id: string
    name: string
    photos: {
        small: string
    }
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}
export type InitialStateType = {
    users: Array<UserType>
}
let initialState: InitialStateType = {
    users: []
}


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType    => {
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
export const setUsersAC = (users: Array<UserType>) => ({ type: SETUSERS, users } as const);

export default usersReducer;