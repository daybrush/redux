import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { Link } from 'react-router'


class Viewer extends Component {
	componentWillMount() {
		const {actions, courseId} = this.props;

		NEXTActions.fetchLoadCourse(actions, courseId);
	}

  render() {
	 const {title, goals, lectureId} = this.props.state.course;
    return (
      <div className="window-overlay">
      	<div className="window-wrapper">
      		<div class="window-close">
      			<Link to={"/lecture/" + lectureId}>X</Link>
      		</div>
      			<h2>{title}</h2>
      			<h2>{goals.map(goal => (<div className="goal-card">{goal.title}</div>))}</h2>
        	</div>
      </div>
    )
  }
}


const mapStateToProps = state => {
	return {state: state.Viewer}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer)
