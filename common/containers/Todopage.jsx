import {connect} from 'react-redux';
import Todo from '../components/Todo.jsx';
import {bindActionCreators} from 'redux';
import  todoAction from '../action/todoaction.js';


//mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onAddTodoClick: (text) => {
      dispatch(todoAction(text))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);