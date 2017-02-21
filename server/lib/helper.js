import PostModel from '../models/posts';

const getInitialData=()=>{
  let initialData={
    user:{
      isLogin:false,
      userInfo:{
        name:"Betamee",
        gender:"M",
        bio:"Student",
        sign:"I love coding"
      }
    },
    posts:{
      isFetching:false,
      didInvalidate:false,
      items:[
        {
          postId:"1",
          author:"Betamee",
          postTime:"2017-2-20",
          pv:100,
          postContent:"哈哈哈哈哈哈哈，我很好，天气很好，非常的好，嘿嘿嘿嘿嘿嘿"
        },
        {
          postId:"2",
          author:"Betamee",
          postTime:"2017-2-20",
          pv:100,
          postContent:"哈哈哈哈哈哈哈，我很好，天气很好，非常的好，再见再见再见"
        }
      ]
    }
  }
  return initialData;
}

export default getInitialData;