export default function resultReducer(state = '', action) {
    switch (action.type) {
        case 'result':
            return { ...state, ...action }
        default:
            return state
    }
}