import { combineReducers } from 'redux'
import buildingReducer from './buildingReducer'
import floorsReducer from './floorsReducer'
import materialReducer from './materialReducer'
import wallLengthReducer from './wallLengthReducer'
import wallHeightReducer from './wallHeightReducer'
import resultReducer from './resultReducer'
import countReducer from './countReducer'

export default combineReducers({
    buildingReducer,
    floorsReducer,
    materialReducer,
    wallLengthReducer,
    wallHeightReducer,
    resultReducer,
    countReducer
});
