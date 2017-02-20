import React,{Component} from 'react';

class Layout extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("layout mount here");
    console.log(this.props);
  }
  
  render() {
    return(
      <div>
        <div>Hello Layout</div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;