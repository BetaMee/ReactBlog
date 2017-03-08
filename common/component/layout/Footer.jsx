import React from 'react'
import Paper from 'material-ui/Paper';
import CSSStyles from './Footer.css';


const InlineStyles = {
  footer:{
    backgroundColor:"#212121",
    width:"100%",
    height:"300px",

    display:"flex",
    alignItems:"center",
    justifyContent: "center",

    color:"#E3F2FD"
  }
};

/**
 * Footer组件，可定义些尾部信息
 */
const Footer = ()=> (
  <Paper style={InlineStyles.footer} zDepth={1}>
    <footer className={CSSStyles.footer}>
      <p>
        Built with <strong>❤</strong>︎ and <strong>code</strong> by @BetaMee. 
      </p>
      <p>&copy;copyright 2015-2017</p>
    </footer>
  </Paper>
)

export default Footer;