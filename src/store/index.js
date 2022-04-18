import { reducer } from "./reducer";
import { sidebarBtnClickAction, applyFilterBtnClickAction } from "./actions";

export { reducer };

export const sidebarActions = {
    sidebarBtnClick: sidebarBtnClickAction
};

export const productPageActions = {
    applyFilterBtnClick: applyFilterBtnClickAction
}