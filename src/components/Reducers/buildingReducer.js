export default function buildingReducer(state = '', action) {
    switch (action.type) {
        case 'ADD_BUILDING':
            return { ...state, ...action }
        default:
            return state
    }
}