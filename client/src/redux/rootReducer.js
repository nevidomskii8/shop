import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import goodsReducer from './reducer/goodsReducer'
import ordersReducer from './reducer/ordersReducer'
import storageReducer from './reducer/storageReducer'

export default combineReducers({
  goods: goodsReducer,
  order: ordersReducer,
  storage: storageReducer,
  form: formReducer
})