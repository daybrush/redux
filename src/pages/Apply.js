import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfessorList from '../components/ProfessorList'

class Apply extends Component {
	componentWillMount() {
		const {actions} = this.props;


		NEXTActions.fetchLoadProfessorAll(actions).then(professors=> {
			console.log(professors);
		});
	}

  render() {
	const {state, actions} = this.props
    return (
        <ProfessorList professors={state.professors}/>
    )
  }
}


const mapStateToProps = state => {
	return {state: state.Apply}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply)
