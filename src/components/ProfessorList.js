import React, { Component, PropTypes } from 'react'
import ProfessorBoard from './ProfessorBoard'

export default class ProfessorList extends Component {
  static propTypes = {
    professors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { professors, actions } = this.props
    console.log(professors);

    return (
        <div className="professor-list">
          {professors.map(professor =>
            <ProfessorBoard professor={professor} key={professor.id} />
          )}
        </div>
    )
  }
}
