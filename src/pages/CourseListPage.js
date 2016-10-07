import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CourseCard from '../components/CourseCard'
import AddCourseCard from '../components/AddCourseCard'

class CourseListPage extends Component {
	
	componentWillMount() {
		document.body.className = "view-lecture";
		const {actions, params} = this.props;
		const lectureId = params.lectureId;
		NEXTActions.fetchLoadCourseAll(actions, lectureId);
/*
		NEXTActions.fetchLectureByCourse(actions, lectureId);
		NEXTActions.fetchCourse(actions, courseId).then((course) => {
			const id = course.professor;
			NEXTActions.fetchProfessor(actions, id);				
		});
*/
	}
	renderHeader() {
		const {name, professor, status} = this.props.state.lecture;
		if(!professor)
			return;
			
		console.log(name, professor);
		return (
			<div className="lecture-header">
				<div className="lecture-header-name">{name}</div>
				<div className="lecture-header-professor">{professor.name}</div>				
				<div className="lecture-header-status">{status}</div>
			</div>
			
		)
	}
	render() {
		if(!("lecture" in this.props.state))
			return "";
		const lecture = this.props.state.lecture;
  		const {courses} = lecture;
  		return (
  		<div className="course-list-wrapper">
  			{this.renderHeader()}
  			<div className="course-list">
	  			{courses.map(course =>
		  			(<CourseCard key={course.id} lecture={lecture} course={course}/>)
		  		)}
		  		<AddCourseCard/>
		  	</div>
  		</div>
  		)
  	}
}


const mapStateToProps = state => {
	return {state: state.CourseListPage}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseListPage)
