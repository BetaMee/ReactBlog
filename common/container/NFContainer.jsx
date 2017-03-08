import React from 'react';

import NotFoundPage from '../component/page/NotFoundPage.jsx';
import {connect} from 'react-redux';



const mapStateToProps = (state, ownProps) => {
  return {
    router:state.routing
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotFoundPage);