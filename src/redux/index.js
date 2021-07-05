import { combineReducers } from 'redux';
import setting from './setting';
import modalstatus from './modalstatus';
import signin from './signin';
import userinfo from './userinfo';
import nodemap from './nodemap';

const rootReducer = combineReducers({
    setting,
    modalstatus,
    signin,
    userinfo,
    nodemap,
});

export default rootReducer;