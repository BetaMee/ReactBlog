import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class PostOne extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("post one");
  }
  

  render(){
    console.log(this.props.routeParams);
    
    const posts = this.props;
    console.log(posts);
    
    const routeParams=this.props.routeParams;//路由路径
    const postId = routeParams.postId;
    let post={};
    // for(const item in posts.items){//检索功能
    //   if(item.postId===postId){//查看文章ID是否在里面
    //     post=item;//将文章传给post变量
    //     break;
    //   }
    // }
    // if(post==={}){
      
    // }

    return (
      <div>
        <Card>
          <CardHeader
            title={post.author}
            subtitle="Subtitle"
            avatar="/uploadImg/avatar.jpg"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="/uploadImg/avatar.jpg" />
          </CardMedia>
          <CardTitle  subtitle="Card subtitle" />
          <CardText>
           hello
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default PostOne;


    