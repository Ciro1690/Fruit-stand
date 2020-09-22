import { createStore } from 'redux'
import reducer from './reducer'
import { addOrange, addApple,clearFruit } from './actions'

const store = createStore(reducer)
window.store = store
window.addOrange = addOrange
window.addApple = addApple
window.clearFruit = clearFruit

export default store