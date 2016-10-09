import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfessorList from '../components/ProfessorList'
import Apply from './Apply'
import LectureCard from '../components/LectureCard'

class mainPage extends Component {
	componentWillMount() {
		const {_actions, actions} = this.props;

		document.body.className = "";
		
		NEXTActions.fetchLoadMyLectures(actions);
		
	}

  render() {
	const {state, actions} = this.props
	console.log(state);
    return (
    	<section className="content">
    		신청한 강의 목록
    		<ul className="lecture-list">
    		{state.lectures.map(lecture => (
    			
    			<LectureCard isLink="true" lecture={lecture} />
    		))}
    		</ul>
    		
    		강의 신청하기
        <Apply/>
        </section>
    )
  }
}


const mapStateToProps = state => {
	return {state: state.MyLectures}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainPage)
