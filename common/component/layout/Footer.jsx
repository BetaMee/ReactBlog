import React, {Component} from 'react'
import Paper from 'material-ui/Paper';

const styles = {
  footer:{
    backgroundColor:"#212121",
    width:"100%",
    height:"500px"
  }
};

/**
 * Footer组件，可定义些尾部信息
 */
const Footer = ()=> (
  <Paper style={styles.footer} zDepth={1}>
    <footer className="page-footer">
      <p>
        This is a blog  to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
      </p>

      <p>
        Built with <strong>❤</strong>︎ and <strong>code</strong> by <a href="http://oakmyblog.com" target="_blank">橡树上</a>.
        Contribute on <a href="https://github.com/lmammino/judo-heroes"></a> or
        read the tutorial on <a href="https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app">Github</a>
      </p>
    </footer>
  </Paper>
)

export default Footer;