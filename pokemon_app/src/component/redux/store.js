import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk"
import {reducer} from './reducer'
const Store = createStore(reducer,applyMiddleware(thunk))

export { Store };