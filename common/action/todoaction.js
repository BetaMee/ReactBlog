export const ADD_TODO = 'ADD_TODO';

export default function todoAction(todoTxt) {
  return {
    type: ADD_COUNT,
    todo:todoTxt
  }
}