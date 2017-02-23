import React,{Component} from  'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {GridTile} from 'material-ui/GridList';


const PostItem=({postTitle,postIntro,postTime,author,pv})=>{
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

export default PostItem;