import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Back from 'material-ui/svg-icons/maps/flight';
import Divider from 'material-ui/Divider';
import marked from 'marked';
import Snackbar from 'material-ui/Snackbar';


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
  
  handleRemovePost=(postId)=>{
    const {removePostById} = this.props;
    removePostById(postId);
  }
  
  render(){
      const {posts,routeParams,isLogin,snkStatus,changeSnkStatus,postMsg} =this.props;
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
          <Snackbar
            open={snkStatus}
            message={postMsg}
            autoHideDuration={4000}
            onRequestClose={e=>changeSnkStatus()}
          />
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
            {isLogin==true?(
              <CardActions>
                <FlatButton label="编辑" onTouchTap={this.handleExpand} />
                <FlatButton label="删除" onTouchTap={e=>this.handleRemovePost(post._id)} />
              </CardActions>
            ):(<div></div>)}
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