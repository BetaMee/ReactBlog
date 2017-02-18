import userReducer from './user';
import postsReducer from './posts';

const initialState={};

export default rootReducer=(state=initialState, action)=>{
  return {
    userReducer:userReducer(state.user, action),
    postsReducer:postsReducer(state.posts, action)
  }
}
