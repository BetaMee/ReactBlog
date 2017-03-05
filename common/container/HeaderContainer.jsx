import React from 'react';

import Header from '../component/layout/Header.jsx';
import {connect} from 'react-redux';

import {DrawerChangeStatus,LoginOpenDialog} from '../action/UIAction.js';
import {GetUserLogin} from '../action/UserAction.js';
import {ChangeLoginName,ChangeLoginPw} from '../action/FormAction.js';



const mapStateToProps = (state, ownProps) => {
  return {
    drawerStatus: state.UI.drawer,//post的state
    dialogStatus: state.UI.loginDialog,
    LoginState:state.form
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeDrawerStatus: () => {
      dispatch(DrawerChangeStatus())
    },

    changeDialogStatus:()=>{
      dispatch(LoginOpenDialog());
    },

    getUserLogin:(username,password)=>{
      dispatch(GetUserLogin(username,password));
    },

    changeLoginName:(name)=>{
      dispatch(ChangeLoginName(name));
    },

    changeLoginPw:(pw)=>{
      dispatch(ChangeLoginPw(pw));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);