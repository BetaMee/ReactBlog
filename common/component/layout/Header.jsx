import React, {Component} from 'react'
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';

/**
 * Header组件，可定义些头部标题，头像
 */
const Header = ({siteTitle})=> (
  <header>
    <AppBar
      title={siteTitle}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </header>
)


export default Header;