import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



const Item=({postTitle,postIntro,postTime,author,pv})=>{
  return ( 
        <div>
          <Card>
            <CardTitle title={postTitle} subtitle={`发布时间：${postTime} 阅读数：${pv}`} />
            <CardText>
              {postIntro}
            </CardText>
            <CardActions>
              <FlatButton label="阅读" />
            </CardActions>
          </Card>
        </div>    
    );
}


class PostsList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {posts} =this.props;//将post内容取出来
    let postItemNode = posts.items.map(item=>{
      let ItemProps=Object.assign({},item,{
        postIntro: item.postContent.substr(0,100),//取前100字符作为介绍
        postContent:'' 
      });
      return <Item  {...ItemProps} key={ItemProps.postId}/>
    });

    return (
      <div>
        {postItemNode}
      </div>
    );
  }
}


export default PostsList;


    