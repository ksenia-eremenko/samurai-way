import { ActionsTypes } from "./types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UserType = {
    id: number
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
    isFetching: boolean
    followingInProgress: Array<number>
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const follow = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unFollow = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: Array<UserType>) => ({ type: SETUSERS, users } as const);
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const setTotalUserCount = (totalUserCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUserCount } as const);
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleIsFollowingProgress = (followingInProgress: Array<number>, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId } as const);

export default usersReducer;