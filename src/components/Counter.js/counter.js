import { connect } from 'react-redux';
import actions from '../actions';

const Counter = ({ counter, inc }) => {

}

Counter = (counter, inc) => {
    
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);