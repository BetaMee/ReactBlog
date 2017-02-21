import React,{Component} from  'react';
import PostItem from './PostItem.jsx';

class Posts extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("post here");
  }
  
  render() {
    const {posts} =this.props;//将post内容取出来
    console.log(posts);
    let postItemNode = posts.items.map(item=>{
      let ItemProps=Object.assign({},item,{
        postIntro: item.postContent.substr(0,100),//取前100字符作为介绍
        postContent:''
      });
      return <PostItem  {...ItemProps} key={ItemProps.postId}/>
    });
    return (
      <div>
        {postItemNode}
      </div>
    );
  }
}

export default Posts;