import React,{Component} from  'react';
import {Link} from 'react-router';
 
import CSSStyles from './PostsLayout.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Next from 'material-ui/svg-icons/image/navigate-next';
import Before from 'material-ui/svg-icons/image/navigate-before';

const InlineStyles={
  floatBefore:{
    position:"fixed",
    right:"5%",
    top:"25%"
  },
  floatNext:{
    position:"fixed",
    right:"5%",
    top:"45%"
  }
}


class PostsLayout extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("post here");
  }
  
  render() {

    return (
      <div>    
        <div className={CSSStyles.root}> 
          <div className={CSSStyles.posts}>
              {this.props.children}
          </div>
        </div>  
        <Link to="/">        
          <FloatingActionButton 
            style={InlineStyles.floatBefore}
            backgroundColor="#E8EAF6"
          >
                <Next />
          </FloatingActionButton> 
        </Link>
        

        <Link to="/">
          <FloatingActionButton 
            style={InlineStyles.floatNext}
            backgroundColor="#E8EAF6"
          >
                <Before />
          </FloatingActionButton> 
        </Link>
        
      </div>  
      
    );
  }
}

export default PostsLayout;