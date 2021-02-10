export function buildingType(building) {
    return {
        type: 'ADD_BUILDING',
        building,
    }
}

store.dispatch(buildingType(''));