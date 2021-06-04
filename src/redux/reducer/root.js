import { combineReducers } from 'redux'
import temperature from './temperature'

const root = combineReducers({
    temperature: temperature
})

export default root