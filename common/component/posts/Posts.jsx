import React,{Component} from  'react';
import PostList from './PostList.jsx';//post列表
import PostItem from './PostItem.jsx';//单独一篇post文章
//布局
import {GridList, GridTile} from 'material-ui/GridList';

const styles={
  postsLayout: {
    width: "80%",
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    height:'100%'
  },

  rootLayout:{//针对主body的一个布局
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width:'100%',
    height:'1200px'
  }
};



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
      <div style={styles.rootLayout}> 
        <div style={styles.postsLayout}>
            {postItemNode}
        </div>
      </div>   
    );
  }
}

export default Posts;