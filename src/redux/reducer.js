import { combineReducers } from 'redux';
import setting from './setting';
import modal from './modalstatus';
import sign from './signin';
import userinfo from './userinfo';
import nodemap from './nodemap';

const rootReducer = combineReducers({
    setting,
    modal,
    sign,
    userinfo,
    nodemap,
});

export default rootReducer;