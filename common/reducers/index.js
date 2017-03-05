import { combineReducers }from 'redux';
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer';
import UIReducer from './UIReducer';//管理UI状态的reducer
import FormReducer  from './FormReducer';


export default combineReducers({
    UI:UIReducer,//这个只处理UI状态变化
    form:FormReducer,
    user:UserReducer,
    posts:PostsReducer,
    routing: routerReducer
});
