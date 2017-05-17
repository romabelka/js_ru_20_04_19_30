import {combineReducers} from 'redux'
import counterReducer from './counter'
import articlesData from './articles'

export default combineReducers({
    counter: counterReducer,
    articlesData
})