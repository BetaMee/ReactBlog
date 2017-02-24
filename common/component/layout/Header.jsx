import React, {Component} from 'react'
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
 
import styles from './Header.js';

/**
 * Header组件，可定义些头部标题，头像
 */
const Header = ({siteTitle})=> (
    <header>
      <AppBar
        title={siteTitle}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        zDepth={0}
        style={styles.header}
        titleStyle={styles.titleStyle}
      />
    </header>
);

export default Header;