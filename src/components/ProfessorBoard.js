import React, { Component, PropTypes } from 'react'
import LectureCard from './LectureCard'

export default class ProfessorBoard extends Component {
  static propTypes = {
    professor: PropTypes.object.isRequired,
  }

  renderHeader(name) {
	return (
	 <div className="professor-board-header">
		 <i className="fa fa-user"></i>
		 <h3 className="professor-board-header-name"> {name}</h3>
	 </div>
	)  
  }

  render() {
    const { lectures, name, actions } = this.props.professor

    return (
    	<div className="professor-board">
    	{this.renderHeader(name)}  
    	<ul className="lecture-list">
          {lectures.map(lecture =>
            <LectureCard lecture={lecture} key={lecture.id} actions={actions} />
          )}

    	</ul>
    	</div>

    )
    
    }
}
