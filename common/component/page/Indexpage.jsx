import React,{Component} from 'react';
import {Link} from 'react-router';


class Indexpage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount () {
    console.log("Indexpage did mount");
    console.log(this.props);
  }
  
  render() {
    return(
      <div>
        Hello Indexpage<br/>
        <Link to="/posts">Go for Posts</Link>
      </div>
    );
  }
}

export default Indexpage;