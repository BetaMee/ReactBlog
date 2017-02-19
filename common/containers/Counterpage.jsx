import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {bindActionCreators} from 'redux';
import counterAction from '../action/counteraction.js';


//mapStateToProps
const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onIncreaseClick: () => {
      dispatch(counterAction())
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);