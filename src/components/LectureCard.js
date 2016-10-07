import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
export default class LectureCard extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  }

//\f007

  render() {
    const {  name, id } = this.props.course
    return (
      <li className="course-card">
	       <Link to={"/lecture/"+ id} className="lecture-title">
	        	<span className="lecture-title-name">{name}</span>
	        	<span className="lecture-card-options">
	        		<i className="fa fa-star-o"></i>
	        	</span>
        	</Link>
      </li>
    )
  }
}
