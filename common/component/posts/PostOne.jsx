import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Back from 'material-ui/svg-icons/maps/flight';
import Divider from 'material-ui/Divider';
import marked from 'marked';


import CSSStyles from './PostOne.css';

const InlineStyles={
  goTop:{
    position:"fixed",
    right:"5%",
    bottom:"25%"
  }
}


class PostOne extends Component{
  constructor(props){
    super(props);
  }

  
  goTopWindow=()=>{
    window.scroll(0,0);
  }
  
  
  render(){
      const {posts,routeParams} =this.props;
      const postId=routeParams.postId;
      console.log(posts.items);
      let post={};
      if(posts.items.length===1){//只有一篇文章,适用于单篇请求
        post=posts.items[0];
      }else{
        for(let item of posts.items){//适用于默认请求
          if(item._id===postId){//将id进行搜索匹配
            post=item;
          }
        }
      }
     
      return (
        <div className={CSSStyles.container}>
          <Card>
            <CardHeader
              title={post.author.name}
              subtitle={post.author.sign}
              avatar={post.author.avatar}
            />
            <CardTitle title={post.postTitle} subtitle={`发布时间：${post.postTime} 阅读数：${post.pv}`}/>
            <Divider />
            <CardText>
             <div dangerouslySetInnerHTML={{__html:marked(post.postContent)}} />
            </CardText>
          </Card>    
            <FloatingActionButton 
              style={InlineStyles.goTop}
              backgroundColor="#E8EAF6"
              onClick={e=>this.goTopWindow()}
            >
                  <Back />
            </FloatingActionButton> 
        </div>
    ); 
  }
}


export default PostOne;


    