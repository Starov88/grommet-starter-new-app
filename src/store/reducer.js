const initState = {
    showSidebar: true,
    productFilter: {}
}

export const reducer = (state = initState, action = null) => {
    let newState = { ...state };
    switch (action.type) {
        case 'SIDEBAR_BTN_CLICK':
            newState.showSidebar = action.payload;
            return newState;
        case 'APPLY_FILTER_BTN_CLICK':
            newState.productFilter = action.payload;
            return newState;
        default: return state;
    }
} 