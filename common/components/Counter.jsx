import React,{Component} from 'react';
import {Link} from 'react-router';


class Counter extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount () {
    console.log("Counter did mount");
  }
  
  handleClick=(e)=>{
    const {onIncreaseClick} = this.props;
    e.preventDefault();
    console.log("click");
    onIncreaseClick();//改变状态，触发action，props会自动随之变化，由react-redux提供，我只需要提供UI组件
  }


  handleAsyncClick=(e)=>{
    const {AsyncRequestDispatch} = this.props;
    e.preventDefault();
    console.log("async click");
    console.log(AsyncRequestDispatch);
    AsyncRequestDispatch();//异步改变状态
  }

  render() {
    const { count} = this.props;
    console.log(count);
    return(
      <div>
        Hello Counter{count.num}<br/>
        Post数据：{count.data.post}        
        <button onClick={this.handleClick}>改变状态</button><br/>
        <button onClick={this.handleAsyncClick}>改变状态</button><br/>
        <br/>
      <Link to="/">Index</Link>
      <Link to="/todo">Todo</Link>      
      </div>
    );
  }
}

export default Counter;