import { ActionsTypes, SidebarType } from "./types";

let initialState: SidebarType = {

}

const sidebarReducer = (state: SidebarType  = initialState, action: ActionsTypes) => {
    return state;
}

export default sidebarReducer;