import PostsEntity from '../models/posts.js';



const parseUrl=(url)=>{
  
  //返回默认的值
  if(/^\/$/.test(url)){//匹配/，首页状态
    return 0;
  }else if(/^\/posts\/$/.test(url) || /^\/posts$/.test(url)){//匹配/posts/ 和/posts
    return 0;
  }
  
  //测试/posts/create或者/posts/create/
  if(/^\/posts\/create/.test(url) || /^\/posts\/create\//.test(url)){
    return 0;
  }

  let postRegExp=/^\/posts\//g;//构造/posts/:postId的查询正则
  
  if(postRegExp.test(url)){
    var postId= url.substring(7);//切除/posts/
    if(postId.search(/\//)<0){//匹配是否有/这样的字符串,小于0说明没有，是安全的
      return postId;
    }else if(postId.search(/\//g)==postId.length-1){//说明/在最后一个
      return postId.replace(/\//,'');//替换掉字符串
    }else{//在中间，只要提取第一段就可以
      let index=postId.search(/\//g);
      return postId.substring(0,index);
    }
  }


  //匹配用户
  if(/^\/user\/$/g.test(url) || /^\/user$/g.test(url)){
    return 1;
   }

    //都匹配不到为返回2
    return 2
}




/**
 *通过url来匹配不同的资源，比如/posts/:postId获取单篇文章，/user则获取用户信息 
 * @param {*} url 
 */
const getInitialData=(url)=>{
    let initialData={
      // global:{
      //   isLogin:false,      
      // },
      UI:{//UI组件状态
        drawer:{},
        indexpage:{},
        loginDialog:{
          status:false,
        }
      },
      editor:{
        title:'',
        content:''
      },
      form:{
        loginName:'',
        loginPw:''
      },
      user:{
        isLoading:false,//文章是否在获取中
        isLogin:false,//是否已登陆
        errMsg:'',//出错的信息
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
        postCounts:0,//依赖于返回的数量
        pageIndex:1,//post当前的指向页数
        message:"",
        items:[]
      }
    };

  var parsed = parseUrl(url);


  if(parsed===0 || parsed===2 || parsed===1){//返回默认
    return new Promise((resolve,reject)=>{
      PostsEntity.getPosts(6,0)
          .then(result=>{
              PostsEntity.getPostsCounts()
                .then(counts=>{    
                  let posts=[];
                    for(let i=0;i<result.length;i++){
                      posts.push({
                        _id:result[i]._id,
                        author:result[i].author,
                        postTitle:result[i].postTitle,
                        postTime:result[i].postTime,
                        postContent:result[i].postContent,
                        pv:result[i].pv
                      });
                  }
                  initialData.posts.items=posts;//初始数据
                  initialData.posts.postCounts=counts;//初始文章总数
                  resolve(initialData);
                }).catch(err=>{
                  reject(err);
                });
          })
          .catch(err=>{
            reject(err);
          });
    });
  }else{
    return new Promise((resolve,reject)=>{
      PostsEntity.getPostById(parsed)
          .then(result=>{
              PostsEntity.getPostsCounts()
                .then(counts=>{    
                  let post=Object.assign({},{
                      _id:result._id,
                      author:result.author,
                      postTitle:result.postTitle,
                      postTime:result.postTime,
                      postContent:result.postContent,
                      pv:result.pv
                  });  
                  initialData.posts.items.push(post);//初始数据
                  initialData.posts.postCounts=counts;//初始文章总数
                  resolve(initialData);
                }).catch(err=>{
                  reject(err);
                });
          })
          .catch(err=>{
            reject(err);
          });
    });
  }
}

export default getInitialData;


 