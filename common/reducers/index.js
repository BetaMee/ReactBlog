import { combineReducers }from 'redux';
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer';




const rootReducer=combineReducers({
    user:UserReducer,
    posts:PostsReducer,
    routing: routerReducer
});
export default rootReducer;