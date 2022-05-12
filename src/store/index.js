import { reducer } from "./reducer";
import {
    sidebarBtnClickAction,
    applyFilterBtnClickAction,
    setSidebarStateAction,
    loginAction,
    logoutAction,
    registrationAction
} from "./actions";

export { reducer };

export const sidebarActions = {
    sidebarBtnClick: sidebarBtnClickAction,
    setSidebarState: setSidebarStateAction
};

export const filterActions = {
    onFilterConfirm: applyFilterBtnClickAction
}

export const authActions = {
    onLogin: loginAction,
    onRegistration: registrationAction,
    onLogout: logoutAction
}