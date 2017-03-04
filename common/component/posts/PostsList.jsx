import React,{Component} from  'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import marked from 'marked';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Next from 'material-ui/svg-icons/image/navigate-next';
import Before from 'material-ui/svg-icons/image/navigate-before';

import CSSStlyes from './PostsList.css';

const InlineStyles={
  floatBefore:{
    position:"fixed",
    right:"5%",
    top:"25%"
  },
  floatNext:{
    position:"fixed",
    right:"5%",
    top:"45%"
  }
}


const Item=({postTitle,postIntro,postTime,author,pv,postId})=>{
  console.log(marked(postIntro));
  return ( 
        <div className={CSSStlyes.items}>
          <Link to={`/posts/${postId}`} className={CSSStlyes.link}>
            <Card>
              <CardTitle title={postTitle} subtitle={`发布时间：${postTime} 阅读数：${pv}`} />
              <CardText>
                <div dangerouslySetInnerHTML={{__html:marked(postIntro)}} />
              </CardText>
              <CardActions>
                  <FlatButton label="阅读" />
              </CardActions>
            </Card>
          </Link>
        </div>    
    );
}


class PostsList extends Component{
  constructor(props){
    super(props);
  }

  goNextPage=(pageIndex)=>{
    const {getPosts} = this.props;
    getPosts(6,6*pageIndex,pageIndex+1);//限制6条，跳过6*pageIndex条
  }

  goPrevPage=(pageIndex)=>{
    const {getPosts} = this.props;
    getPosts(6,6*(pageIndex-2),pageIndex-1);//限制6条，跳过6*pageIndex条
  }
  
  render(){
    const {items,pageIndex,postCounts} =this.props.posts;//将post内容取出来
    let postItemNode = items.map((item,index,array)=>{
      if(6*(pageIndex-1)<= index <6*pageIndex){//满足一定条件刷选相应的数据，分页功能
          let ItemProps=Object.assign({},item,{
            postIntro: item.postContent.substr(0,100),//取前100字符作为介绍
            postContent:'' 
          });
          return <Item  {...ItemProps} key={ItemProps._id}/>
      }  
    });
    //分页数量
    let pageNum = Math.ceil(postCounts/6);
    
    return (
      <div className={CSSStlyes.container}>
        {postItemNode}
        <FloatingActionButton 
          style={InlineStyles.floatBefore}
          backgroundColor="#E8EAF6"
          disabled={pageIndex===pageNum?true:false}
          onClick={e=>this.goNextPage(pageIndex,postCounts)}
        >
              <Next />
        </FloatingActionButton>

        <FloatingActionButton 
          style={InlineStyles.floatNext}
          backgroundColor="#E8EAF6"
          disabled={pageIndex===1?true:false}
          onClick={e=>{this.goPrevPage(pageIndex)}}
        >
              <Before />
        </FloatingActionButton> 
      </div>
    );
  }
}


export default PostsList;


    