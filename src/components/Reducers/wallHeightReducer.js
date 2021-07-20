export default function wallHeightReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD_HEIGHT':
            return { ...state, ...action }
        default:
            return state
    }
}