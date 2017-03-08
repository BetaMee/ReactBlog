import React,{Component} from  'react';
 
import CSSStyles from './PostsLayout.css';


class PostsLayout extends Component {
  constructor(props){
    super(props);
  }
  
  render() {

    return (
      <div>    
        <div className={CSSStyles.root}> 
          <div className={CSSStyles.posts}>
              {this.props.children}
          </div>
        </div>  
        
        
      </div>  
      
    );
  }
}

export default PostsLayout;