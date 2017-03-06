import React,{Component} from 'react';
import {findDOMNode} from 'react-dom';
import marked from 'marked';


import CSSStyles from './Editor.css';


class Editor extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    const {getTitleInput,getContentInput,editorState} = this.props;
    const realDom = findDOMNode(this.refs.textarea);//找到真实节点
    realDom.addEventListener('DOMSubtreeModified',e=>this.handleTextAreaChange(e));//监听DOM文本节点，获取文本数据
  }
  
  handleTextAreaChange=(e)=>{
    const {getContentInput} =this.props;
    getContentInput(e.target.nodeValue);
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
        <div className={CSSStyles.textareaContainer}>
            <div className={CSSStyles.editor} contentEditable={true} ref="textarea">正文</div>    
            <div 
              className={CSSStyles.editorOutput} 
              
            >
            {editorState.content}
            </div>      
        </div>
      </div>
    );
  }
}

export default Editor;