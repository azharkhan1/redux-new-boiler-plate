import counterRedcuer from './counterReducer';
import loginRedcuer from './loginReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : counterRedcuer,
    login : loginRedcuer,
})

export default allReducers;