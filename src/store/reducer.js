const initState = {
    enableSidebar: true,
    showSidebar: true,
    productFilter: {},
    userInfo: { loggedIn: false, user: null }
}

export const reducer = (state = initState, action = null) => {
    let newState = { ...state };
    switch (action.type) {
        case 'SET_SIDEBAR_STATE':
            newState.enableSidebar = action.payload.enable;
            if (newState.enableSidebar) {
                newState.showSidebar = action.payload.show;
            }
            else {
                newState.showSidebar = false;
            }
            return newState;
        case 'SIDEBAR_BTN_CLICK':
            newState.showSidebar = action.payload;
            return newState;
        case 'APPLY_FILTER_BTN_CLICK':
            newState.productFilter = action.payload.filter;

            if (action.payload.closeFilter) {
                newState.showSidebar = false;
            }
            return newState;
        case 'LOGIN':
            newState.userInfo.loggedIn = true;
            newState.userInfo.user = action.payload;
            return newState;
        case 'REGISTRATION':
            newState.userInfo.loggedIn = true;
            newState.userInfo.user = action.payload;
            return newState;
        case 'LOGOUT':
            newState.userInfo = { ...state.userInfo };
            newState.userInfo.loggedIn = false;
            newState.userInfo.user = {};
            return newState;
        default: return state;
    }
} 