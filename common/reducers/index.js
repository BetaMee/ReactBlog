import { combineReducers }from 'redux';
import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer';




const rootReducer=combineReducers({
    user:UserReducer,
    posts:PostsReducer
});
export default rootReducer;