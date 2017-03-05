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

  changeZDepth=(e,depth,target)=>{
    const {
      changeImgDepth,
      changeLogo1Depth,
      changeLogo2Depth,
      changeLogo3Depth
    } = this.props;
    switch (target){
      case 'avatar':
        changeImgDepth(depth);
      break;

      case 'logo1':
        changeLogo1Depth(depth);
      break;

      case 'logo2':
        changeLogo2Depth(depth);
      break;

      case 'logo3':
        changeLogo3Depth(depth);
      break;

      default:
        break;
    }
    
  }
  
  render() {
    const {imgDepth,logo1Depth,logo2Depth,logo3Depth} = this.props.indexUI;

    return(
    <div>    
      <Paper 
        style={InlineStyles.indexLayout}
        zDepth={0}
      >
        <Paper style={InlineStyles.avatarContainer} zDepth={imgDepth} circle={true}>
          <img  className={CSSStyles.avatar} src="/uploadImg/avatar.jpg" 
                onMouseOver={e=>this.changeZDepth(e,3,'avatar')}
                onMouseOut={e=>this.changeZDepth(e,1,'avatar')}
                onTouchStart={e=>this.changeZDepth(e,3,'avatar')}
                onTouchEnd={e=>this.changeZDepth(e,1,'avatar')}
          />
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
          zDepth={logo1Depth}
          >
            <img style={InlineStyles.Pic} 
                  src="/uploadImg/get-started.svg" 
                  onMouseOver={e=>this.changeZDepth(e,4,'logo1')}
                  onMouseOut={e=>this.changeZDepth(e,0,'logo1')} 
            />
          </Paper>

          <Paper 
          style={InlineStyles.indexPic}
          zDepth={logo2Depth}
          >
            <img style={InlineStyles.Pic} 
                  src="/uploadImg/components.svg"
                  onMouseOver={e=>this.changeZDepth(e,4,'logo2')}
                  onMouseOut={e=>this.changeZDepth(e,0,'logo2')} 
            />
          </Paper>

          <Paper 
          style={InlineStyles.indexPic}
          zDepth={logo3Depth}
          >
            <img style={InlineStyles.Pic} 
                 src="/uploadImg/css-framework.svg"
                 onMouseOver={e=>this.changeZDepth(e,4,'logo3')}
                 onMouseOut={e=>this.changeZDepth(e,0,'logo3')} 
            />
          </Paper>         
        </div>
      </Paper>

    </div>
    );
  }
}

export default Indexpage;