import React, {Component} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

//图标
import ActionHome from 'material-ui/svg-icons/action/home';//主页
import CommunicationRss from 'material-ui/svg-icons/communication/rss-feed';//RSS
import ContentDrafts from 'material-ui/svg-icons/content/drafts';//文章
import ContentFlag from 'material-ui/svg-icons/content/flag';//主页
import ActionFace from 'material-ui/svg-icons/action/face';//主页
import ActionLock from 'material-ui/svg-icons/action/lock';//主页




const InlineStyles={
  header:{
    backgroundColor:"#B3E5FC"
  },
  titleStyle:{
    color:"#01579B"
  }
};

const ReDrawer = ({status,onClickItem,changeStatus})=> (
    <Drawer
      docked={false}
      width={250}
      open={status}
      onRequestChange={e=>changeStatus()}
    >
      <AppBar
        title="菜单"
        zDepth={0}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={e=>changeStatus()}
        style={InlineStyles.header}
        titleStyle={InlineStyles.titleStyle}
      />
      <MenuItem 
        onTouchTap={e=>onClickItem(e,'index')}
        leftIcon={<ActionHome/>}
      >首页</MenuItem>
      <MenuItem 
        onTouchTap={e=>onClickItem(e,'posts')}
        leftIcon={<ContentDrafts/>}
      >文章</MenuItem>
      <MenuItem 
        onTouchTap={e=>onClickItem(e,'catagories')}
        leftIcon={<ContentFlag />}
      >发表</MenuItem>
      <MenuItem 
        onTouchTap={e=>onClickItem(e,'RSS')}
        leftIcon={<CommunicationRss />}
      >RSS</MenuItem>
      <MenuItem 
        onTouchTap={e=>onClickItem(e,'login')}
        leftIcon={<ActionLock />}      
      >登陆</MenuItem>
      <Divider />
      <MenuItem 
        onTouchTap={e=>onClickItem(e,'about')}
        leftIcon={<ActionFace />}
      >About Me</MenuItem>   
    </Drawer>
);

export default ReDrawer;

        