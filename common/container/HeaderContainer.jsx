import React from 'react';

import Header from '../component/layout/Header.jsx';
import {connect} from 'react-redux';

import {DrawerChangeStatus} from '../action/UIAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    drawerStatus: state.UI.drawer//post的state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeDrawerStatus: () => {
      dispatch(DrawerChangeStatus())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);