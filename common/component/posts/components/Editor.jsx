import React,{Component} from 'react';
import {findDOMNode} from 'react-dom';
import marked from 'marked';


import CSSStyles from './Editor.css';


class Editor extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
  
  }
  
  handleTextAreaChange=(e)=>{
    const {getContentInput} =this.props;
    getContentInput(e.target.value);
  }
  handleTitleChange=(e)=>{
    const {getTitleInput} = this.props;
    getTitleInput(e.target.value);
  }

  render(){
    const {editorState} = this.props;
    return (
      <div>
        <div className={CSSStyles.inputContainer}>
          <input className={CSSStyles.input} value={editorState.title} onChange={e=>this.handleTitleChange(e)}/>
        </div>
        <div className={CSSStyles.editorContainer}>
          <textarea className={CSSStyles.editor} value={editorState.content} onChange={e=>this.handleTextAreaChange(e)}/>     
        </div>
      </div>
    );
  }
}

export default Editor;