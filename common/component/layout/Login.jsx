import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class Login extends Component{
  constructor(props){
    super(props);
  }
  
  handleNameChange=(name)=>{
    const {changeLoginName} = this.props;
    changeLoginName(name);
  }

  handlePwChange=(pw)=>{
    const {changeLoginPw} = this.props;
    changeLoginPw(pw);
  }

  handleLogin=()=>{
    const {onClickLogin,loginState} = this.props;
    onClickLogin(loginState.loginName,loginState.loginPw);
  }

  render(){
    const {
      status,
      changeStatus,
      loginState
    } =this.props;

    const actions = [
      <FlatButton
        label="登陆"
        primary={true}
        onTouchTap={e=>this.handleLogin()}
      />,
      <FlatButton
        label="取消"
        primary={true}
        onTouchTap={changeStatus}
      />,
    ];
    return (
        <Dialog
          title="登录"
          actions={actions}
          modal={true}
          open={status}
        >
          <TextField
            hintText="姓名"
            value={loginState.loginName}
            onChange={e=>this.handleNameChange(e.target.value.trim())}
          />
            <br />
            <br />
          <TextField
            hintText="密码"
            type="password"
            value={loginState.loginPw}    
            onChange={e=>this.handlePwChange(e.target.value.trim())}        
          />
            <br />
        </Dialog>
    );
  }
}


export default Login;
  