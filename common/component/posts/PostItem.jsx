import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const PostItem=({postTitle,postIntro,postTime,author,pv})=>{
  return (
    <Card>
      <CardTitle title={postTitle} subtitle={`发布时间：${postTime} 阅读数：${pv}`} />
      <CardText>
        {postIntro}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="阅读" />
      </CardActions>
    </Card>
  );
}

export default PostItem;