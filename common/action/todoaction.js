export const ADD_TODO = 'ADD_TODO';

const todoAction=(todoTxt)=> {
  return {
    type: ADD_COUNT,
    todo:todoTxt
  }
}

export default  todoAction;