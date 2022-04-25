import { reducer } from "./reducer";
import { sidebarBtnClickAction, applyFilterBtnClickAction, setSidebarStateAction } from "./actions";

export { reducer };

export const sidebarActions = {
    sidebarBtnClick: sidebarBtnClickAction,
    setSidebarState: setSidebarStateAction
};

export const productPageActions = {
    applyFilterBtnClick: applyFilterBtnClickAction,
    sidebarBtnClick: sidebarBtnClickAction
}