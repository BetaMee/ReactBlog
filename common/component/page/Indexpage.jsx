import React,{Component} from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import NotificationWifi from 'material-ui/svg-icons/notification/wifi';
import styles from './Indexpage';



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
        style={styles.indexLayout}
        zDepth={0}
      >
        <Paper style={styles.avatarContainer} zDepth={1} circle={true}>
          <img style={styles.avatar} src="img/avatar.jpg"/>
        </Paper>
        <h1 style={styles.siteIntro}>Hello World</h1>
        <Link to="/posts">
          <FlatButton 
            label="See My Posts" 
            labelPosition="after"
            primary={true} 
            icon={<NotificationWifi />}
            style={styles.indexButton}
          />
        </Link>
      </Paper>
      {/*第二屏*/}
      <Paper 
        style={styles.indexIntro}
        zDepth={0}
      >
        <div>这是一个开源的博客程序，使用react+redux+router</div>
      </Paper>

      {/*第三屏*/}
      <Paper 
        style={styles.indexLink}
        zDepth={0}
      >
        <div style={styles.indexPicContainer}>
          <Paper 
          style={styles.indexPic}
          zDepth={0}
          >
            <img style={styles.Pic} src="/img/get-started.svg"/>
          </Paper>

          <Paper 
          style={styles.indexPic}
          zDepth={0}
          >
            <img style={styles.Pic} src="/img/components.svg"/>
          </Paper>

          <Paper 
          style={styles.indexPic}
          zDepth={0}
          >
            <img style={styles.Pic} src="/img/css-framework.svg"/>
          </Paper>         
        </div>
      </Paper>

    </div>
    );
  }
}

export default Indexpage;