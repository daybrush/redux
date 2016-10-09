import { combineReducers } from 'redux'
import CourseListPage from './CourseListPage'
import Apply from './Apply'
import Viewer from './Viewer'
import MyLectures from './MyLectures'

export default  combineReducers({
  Apply,
  CourseListPage,
  Viewer,
  MyLectures
})
