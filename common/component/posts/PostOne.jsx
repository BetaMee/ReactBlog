import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Back from 'material-ui/svg-icons/maps/flight';
import Divider from 'material-ui/Divider';


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
  shouldComponentUpdate (nextProps, nextState) {
    
  }
  
  
  goTopWindow=()=>{
    window.scroll(0,0);
  }
  

  render(){
    const {posts,user} = this.props;//取出redux中的state
    const postId=this.props.routeParams.postId;//路由路径，匹配的是文章id
    let post={};
    for(const item of posts.items){//for..of 是属性值传递，for..in是属性传递
      if(item.postId===postId){
        post=item;
        break;
      }
    }
    return (
      <div className={CSSStyles.container}>
        <Card>
          <CardHeader
            title={post.author}
            subtitle={user.userInfo.sign}
            avatar={user.userInfo.avatar}
          />
          <CardTitle title={post.postTitle} subtitle={`发布时间：${post.postTime} 阅读数：${post.pv}`}/>
          <Divider />
          <CardText>
           {post.postContent}
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


    