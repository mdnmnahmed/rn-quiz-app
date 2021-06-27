import { combineReducers } from 'redux';
import questionReducer from './questionReducer';

const rootReducers = combineReducers({
    questionReducer: questionReducer,
});

export default rootReducers;