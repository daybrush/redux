import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import * as NEXTActions from '../actions'



export default class AddCourseCard extends Component {
state = {
	edit : false
}

editMode = () => {
	this.setState({edit:true});	
}

addCourse = () => {
	console.log(this);
	const title = this.refs.title.value;
	NEXTActions.fetchAddCourse(this.props.actions, title, this.props.lecture.id);
	this.setState({edit:false});
	//NEXTActions
}
renderEdit() {
	return (
		<div className="course-add-controls">
		<input type="text" ref="title" placeholder="Add a list..."/>
		<button onClick={this.addCourse}>Save</button>
		</div>
	
	)
}
  render() {


    return (
      <div className="course-card">
      	<div className={classNames({"add-course-card-content" : true,"mod-edit": this.state.edit})}>
      		<span className="add-placeholder" onClick={this.editMode}>Add a list...</span>
        	{this.renderEdit()}
        </div>
        	
      </div>
    )
  }
}
