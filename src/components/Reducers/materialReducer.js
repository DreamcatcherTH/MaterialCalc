export default function materialReducer(state = '', action) {
    switch (action.type) {
        case 'ADD_MATERIAL':
            return { ...state, ...action }
        default:
            return state
    }
}