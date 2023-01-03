import { authAPI } from "../api/Api";
import { ActionsTypes } from "./types";

const SET_USER_DATA = "SET_USER_DATA";

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}


const authReducer = (state: any = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId: string, email: string, login: string) => ({ type: SET_USER_DATA, data: { userId, email, login } } as const);

export const getAuth = () => {
    return (dispatch: any) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export default authReducer;