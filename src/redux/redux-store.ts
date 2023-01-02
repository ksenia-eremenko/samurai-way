import {
    combineReducers,
    legacy_createStore as createStore
} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,

});
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;