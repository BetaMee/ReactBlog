import React, {Component} from 'react'
import {Link} from 'react-router';

/**
 * Header组件，可定义些头部标题，头像
 */
const Header = ()=> {
  <header>
    <Link to="/">
      Hello World! This is my Blog
    </Link>
  </header>
}


export default Header;