import { connect } from 'react-redux'
import { addOrange, addApple, clearFruit } from '../components/actions'
import FruitStand from './fruit_stand.jsx'

const mapStateToProps = state => ({
    fruits: state.fruits
})

const mapDispatchToProps = dispatch => ({
    addApple: () => dispatch(addApple()),
    addOrange: () => dispatch(addOrange()),
    clearFruit: () => dispatch(clearFruit())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(FruitStand)
