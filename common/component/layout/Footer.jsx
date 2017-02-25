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
    <footer className={CSSStyles.footerFont}>
      <p>
        This is a blog  to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
      </p>

      <p>
        Built with <strong>❤</strong>︎ and <strong>code</strong> by 橡树上.
        Contribute on or read the tutorial on Github
      </p>
    </footer>
  </Paper>
)

export default Footer;