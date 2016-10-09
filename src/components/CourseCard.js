import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
export default class CourseCard extends Component {
  static propTypes = {
    lecture: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired,
    
  }


  render() {
    const {  id, title, goals } = this.props.course;
    const lectureId = this.props.lecture.id;

console.log(goals);
    return (
      <div className="course-card">
	       <div className="course-card-content">
	       		<Link to={"/view/" + lectureId}>
	        	<h2 title="실전 프로젝트" dir="auto" className="course-title-name">{title}</h2>
	        	<ul className="course-card-goals">
	        		{goals.map(goal => (<li key={goal.id}>{goal.title}</li>))}
	        	</ul>
	        	</Link>
        	</div>
      </div>
    )
  }
}
