import React,{Component} from  'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
  return ( 
        <div className={CSSStlyes.items}>
          <Link to={`/posts/${postId}`} className={CSSStlyes.link}>
            <Card>
              <CardTitle title={postTitle} subtitle={`发布时间：${postTime} 阅读数：${pv}`} />
              <CardText>
                {postIntro}
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

  goNextPage=(pageIndex,postCount)=>{
     const {changePageIndex,getNextPosts} = this.props;
    getNextPosts(6);
    // const {changePageIndex,getNextPosts} = this.props;
    // if((postCount/pageIndex)===6){//表明下一页没有数据了，需要获取,比如12条posts,到了第二页了
    //   getNextPosts(postCount);//将当前页数传进去，后台会获取之后的六条数据
    // }else{
    //   changePageIndex(pageIndex+1);//只是单纯的改变页码，不刷新数据
    // }
  }

  goPrevPage=(pageIndex)=>{
    const {changePageIndex} = this.props;
    changePageIndex(pageIndex-1);
  }
  
  render(){
    const {items,pageIndex,postCount} =this.props.posts;//将post内容取出来
    
    let postItemNode = items.map((item,index,array)=>{
      if(6*(pageIndex-1)<= index <6*pageIndex){//满足一定条件刷选相应的数据，分页功能
          let ItemProps=Object.assign({},item,{
            postIntro: item.postContent.substr(0,100),//取前100字符作为介绍
            postContent:'' 
          });
          return <Item  {...ItemProps} key={ItemProps.postId}/>
      }  
    });

    return (
      <div className={CSSStlyes.container}>
        {postItemNode}
        <FloatingActionButton 
          style={InlineStyles.floatBefore}
          backgroundColor="#E8EAF6"
          disabled={false}
          onClick={e=>this.goNextPage(pageIndex,postCount)}
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


    