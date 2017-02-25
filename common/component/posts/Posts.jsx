import React,{Component} from  'react';
import PostList from './PostList.jsx';//post列表
import PostItem from './PostItem.jsx';//单独一篇post文章

import CSSStyles from './Posts.css';


class Posts extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("post here");
  }
  
  render() {
    const {posts} =this.props;//将post内容取出来
    let postItemNode = posts.items.map(item=>{
      let ItemProps=Object.assign({},item,{
        postIntro: item.postContent.substr(0,100),//取前100字符作为介绍
        postContent:'' 
      });
      return <PostList  {...ItemProps} key={ItemProps.postId}/>
    });
    return (
      <div className={CSSStyles.root}> 
        <div className={CSSStyles.posts}>
            {postItemNode}
        </div>
      </div>   
    );
  }
}

export default Posts;