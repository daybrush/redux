import React, { Component } from 'react'
import { Link } from 'react-router'
export default class Viewer extends Component {
	componentWillMount() {
		const {actions, params} = this.props;
		const id = params.courseId;

		NEXTActions.fetchLoadCourse(actions, id);
	}

  render() {
	 const {title, goals} = this.props.state.course;

    return (
      <div className="window-overlay">
      	<div className="window-wrapper">
      			<h2>{title}</h2>
      			<h2>{goals.map(goal => (<div className="goal-card">{goal.title}</div>))}</h2>
        	</div>
      </div>
    )
  }
}
