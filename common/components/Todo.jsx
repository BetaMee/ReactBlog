import React,{Component} from 'react';
import {Link} from 'react-router';


class Todo extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log("Todo did mount");
    console.log(this.props);

  }

  render() {
    const { todo, onAddTodoClick } = this.props
    console.log(todo);
    console.log(onAddTodoClick);
    return(
      <div>
        Hello Todo!
        <Link to="/">Index</Link>          
        <Link to="/counter">Counter</Link>
      </div>
    );
  }
}

export default Todo;