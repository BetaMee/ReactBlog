import React, {Component} from 'react'
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

const styles={
  header:{
    position:"fixed"//固定头部
  }
};

/**
 * Header组件，可定义些头部标题，头像
 */
const Header = ({siteTitle})=> (
    <header>
      <AppBar
        title={siteTitle}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={styles.header}
      />
    </header>
);

export default Header;