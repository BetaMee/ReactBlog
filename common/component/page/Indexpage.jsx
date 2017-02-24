import React,{Component} from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';


const styles={
  indexLayout:{
    height:"500px",

    display:"flex",
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems:"center"
  },
  avatar:{
    width:"100%",
    borderRadius:"50%"
  },

  avatarContainer:{
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  indexButton:{
    color:"#3F51B5"
  },
  siteIntro:{
    // width:"100%"
  },



  //第二块
  indexIntro:{
    height:"300px",
    backgroundColor:"#E3F2FD"
  }

};

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
          <img style={styles.avatar} src="uploadImg/avatar.jpg"/>
        </Paper>
        <h1 style={styles.siteIntro}>Hello Welcome to My Blog Site</h1>
        <Link to="/posts">
          <FlatButton 
            label="See My Posts" 
            labelPosition="after"
            primary={true} 
            icon={<ActionAndroid />}
            style={styles.indexButton}
          />
        </Link>
      </Paper>

      <Paper 
        style={styles.indexIntro}
        zDepth={0}
      >
      </Paper>

      </div>
    );
  }
}

export default Indexpage;