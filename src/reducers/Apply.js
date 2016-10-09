import * as Actions from '../constants/ActionTypes'

const initialState = {
	professors:[],
}
export default function mainPage(state = initialState, action) {
	switch(action.type ) {
		case Actions.GET_COURSE_ALL:
		case Actions.GET_COURSE_IN_PROFESSOR:
			const professors = state.professors.filter(professor => {    
				return professor.id === action.id
			});
			if(professors.length != 1)
				return state;
			professors[0].courses = Object.assign([], action.courses);
			
			return Object.assign({}, state);
			break;
		case Actions.ADD_COURSE:
		case Actions.GET_PROFESSOR_ALL:
			state.professors = action.professors;
			
			return Object.assign({}, state);
				break;
		case Actions.GET_PROFESSOR:
		case Actions.ADD_PROFESSOR:
	}
	return state;
}
