import { combineReducers } from 'redux';
import setting from './setting';
import modal from './modalstatus';
import sign from './signin';
import userinfo from './userinfo';
// import nodemap from './nodemap'; //수정사항
import node from './node';
// import edge from './edge';
import maphistory from './maphistory';

const rootReducer = combineReducers({
    setting,
    modal,
    sign,
    userinfo,
    node,
    maphistory,
});

export default rootReducer;
