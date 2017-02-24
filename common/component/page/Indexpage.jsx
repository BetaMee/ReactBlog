import React,{Component} from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import NotificationWifi from 'material-ui/svg-icons/notification/wifi';
import InlineStyles from './Indexpage';
import CSSStyles from './Indexpage.css';


class Indexpage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount () {
    console.log("Indexpage did mount");
  }
  
  render() {
    return(
    <div>    
      <Paper 
        style={InlineStyles.indexLayout}
        zDepth={0}
      >
        <Paper style={InlineStyles.avatarContainer} zDepth={1} circle={true}>
          <img className={CSSStyles.avatar} src="uploadImg/avatar.jpg"/>
        </Paper>
        <h1 className={CSSStyles.siteIntro}>Hello World</h1>
        <Link to="/posts">
          <FlatButton 
            label="See My Posts" 
            labelPosition="after"
            primary={true} 
            icon={<NotificationWifi />}
            style={InlineStyles.indexButton}
          />
        </Link>
      </Paper>
      {/*第二屏*/}
      <Paper 
        style={InlineStyles.indexIntro}
        zDepth={0}
      >
        <div>这是一个开源的博客程序，使用react+redux+router</div>
      </Paper>

      {/*第三屏*/}
      <Paper 
        style={InlineStyles.indexLink}
        zDepth={0}
      >
        <div style={InlineStyles.indexPicContainer}>
          <Paper 
          style={InlineStyles.indexPic}
          zDepth={0}
          >
            <img style={InlineStyles.Pic} src="/uploadImg/get-started.svg"/>
          </Paper>

          <Paper 
          style={InlineStyles.indexPic}
          zDepth={0}
          >
            <img style={InlineStyles.Pic} src="/uploadImg/components.svg"/>
          </Paper>

          <Paper 
          style={InlineStyles.indexPic}
          zDepth={0}
          >
            <img style={InlineStyles.Pic} src="/uploadImg/css-framework.svg"/>
          </Paper>         
        </div>
      </Paper>

    </div>
    );
  }
}

export default Indexpage;