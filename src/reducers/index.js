import { combineReducers } from 'redux'
import CourseListPage from './CourseListPage'
import MainPage from './MainPage'
import Viewer from './Viewer'


export default  combineReducers({
  MainPage,
  CourseListPage,
  Viewer
})
