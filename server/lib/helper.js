import PostsEntity from '../models/posts.js';


const getInitialData=()=>{

  let initialData={
    // global:{
    //   isLogin:false,      
    // },
    UI:{//UI组件状态
      drawer:{},
      indexpage:{},
    },
    user:{
      profile:{
        name:"Betamee",
        gender:"M",
        bio:"Student",
        sign:"I love coding",
        avatar:"/uploadImg/avatar.jpg"
      }
    },
    posts:{
      isFetching:false,
      didInvalidate:false,
      singlePost:{//当单独请求一篇文章的时候，初始的数据

      },
      postCounts:0,//依赖于返回的数量
      pageIndex:1,//post当前的指向页数
      items:[]
    }
  }

  return new Promise((resolve,reject)=>{
      PostsEntity.getPosts(6,0)
        .then(result=>{
            PostsEntity.getPostsCounts()
              .then(counts=>{
                initialData.posts.items=result;//初始数据
                initialData.posts.postCounts=counts;//初始文章总数
                resolve(initialData);
              });
        })
        .catch(err=>{
          reject(err);
        });
  });
}

export default getInitialData;