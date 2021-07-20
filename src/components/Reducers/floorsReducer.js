export default function floorsReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD_FLOORS':
            return { ...state, ...action }
        default:
            return state
    }
}