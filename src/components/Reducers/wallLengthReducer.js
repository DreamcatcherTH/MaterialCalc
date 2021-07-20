export default function wallLengthReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD_LENGTH':
            return { ...state, ...action }
        default:
            return state
    }
}