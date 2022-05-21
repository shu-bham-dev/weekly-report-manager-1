import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  // userUpdateProfileReducer,
  // userListReducer,
  // userDeleteReducer,
  // userUpdateReducer,
  employeeListReducer,
} from './reducers/userReducers'

import {
  createReportReducer,
  getReportDetailsReducer,
  listReportsByEmployeeReducer,
  updateReportReducer,
  adminUpdateReportReducer,
  deleteReportReducer,
} from './reducers/reportReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userUpdate: userUpdateReducer,
  employeeList: employeeListReducer,
  createReport: createReportReducer,
  getReportDetails: getReportDetailsReducer,
  listReportsByEmployee: listReportsByEmployeeReducer,
  updateReport: updateReportReducer,
  adminUpdateReport: adminUpdateReportReducer,
  deleteReport: deleteReportReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = configureStore({
  reducer,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

export default store
