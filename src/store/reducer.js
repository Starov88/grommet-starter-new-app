const initState = {
    enableSidebar: true,
    showSidebar: true,
    productFilter: {}
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
            newState.productFilter = action.payload;
            return newState;
        default: return state;
    }
} 