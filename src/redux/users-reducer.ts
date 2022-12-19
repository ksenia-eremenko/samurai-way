import { ActionsTypes } from "./types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUserCount
            }
        default:
            return state;
    }
}
export const followAC = (userId: string) => ({ type: FOLLOW, userId } as const);
export const unFollowAC = (userId: string) => ({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: Array<UserType>) => ({ type: SETUSERS, users } as const);
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const setTotalUsersAC = (totalUserCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUserCount } as const);

export default usersReducer;