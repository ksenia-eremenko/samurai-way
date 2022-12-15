import {
    combineReducers,
    legacy_createStore as createStore
} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,

});
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);