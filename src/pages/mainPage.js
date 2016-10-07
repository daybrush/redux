import React, { Component } from 'react'
import * as NEXTActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfessorList from '../components/ProfessorList'

class mainPage extends Component {
	componentWillMount() {
		const {_actions, actions} = this.props;

		document.body.className = "";
		NEXTActions.fetchLoadProfessorAll(actions).then(professors=> {
			console.log(professors);
		});
	}

  render() {
	const {state, actions} = this.props
    return (
    	<section className="content">
        <ProfessorList professors={state.professors} actions={actions}/>
        </section>
    )
  }
}


const mapStateToProps = state => {
	return {state: state.MainPage}
}

const mapDispatchToProps = dispatch => {
  return{  actions: bindActionCreators(NEXTActions, dispatch), dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainPage)
