import React, {Component} from 'react'
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import ReDrawer from './ReDrawer.jsx';//引入自定义drawer
import {browserHistory} from 'react-router';


const InlineStyles={
  header:{
    position:"fixed",//固定头部
    top:"0px",
    backgroundColor:"#B3E5FC"
  },
  titleStyle:{
    color:"#01579B"
  }
};


/**
 * Header组件，可定义些头部标题，头像
 */

class Header extends Component{
  constructor(props){
    super(props);
  }

  onClickItem=(e,target)=>{
    const {changeDrawerStatus} = this.props;    
    switch(target){
      case 'index':
        browserHistory.push('/');     
      break;
      case 'posts':
        browserHistory.push('/posts');
      break;
      case 'catagories':
        browserHistory.push('/catagories');
      break;
      case 'login':
        browserHistory.push('/login');
      break;
      case 'about':
        browserHistory.push('/about');
      break;
      default:
        break;
    }
    changeDrawerStatus();    
  }

  render(){
    console.log("Header");
    const {drawerStatus,changeDrawerStatus} = this.props;
    return (
      <header>
        <AppBar
          title="十二棵橡树"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          zDepth={0}
          style={InlineStyles.header}
          titleStyle={InlineStyles.titleStyle}
          onLeftIconButtonTouchTap={e=>changeDrawerStatus()}
          onTitleTouchTap={e=>changeDrawerStatus()}
        />
        <ReDrawer 
          status={drawerStatus.status} 
          onClickItem={this.onClickItem} 
          changeStatus={changeDrawerStatus}
        />
      </header>
    );
  }
}

export default Header;