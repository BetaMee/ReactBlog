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
        Hello Indexpage
      <Link to="/counter">Counter</Link>
      <Link to="/todo">Todo</Link>   
      </div>
    );
  }
}

export default Indexpage;