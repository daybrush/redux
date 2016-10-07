import * as types from '../constants/ActionTypes'

export const loadCoursesByProfessor = (id, courses) => {
	return { type: types.GET_COURSE_IN_PROFESSOR , courses, id};
};
export const loadProfessorAll = (professors) => {
	return { type: types.GET_PROFESSOR_ALL , professors} ;
};

export const fetchLoadProfessorAll = (actions) => {
	return new Promise((resolve, reject) => {
	let professors = [
	  {
	    name: '박재성',
	    lectures : [
		  {
		    name: '실전프로젝트',
		    id: 0,
		  },
		  {
		    name: '실전프로젝트2',
		    id: 1,
		  }
		],
	    id: 0
	  },
	  {
	    name: '박재성2',
	    lectures : [
		  {
		    name: '실전프로젝트',
		    id: 0,
		  },
		  {
		    name: '실전프로젝트2',
		    id: 1,
		  }
		],
	    id: 1
	  }
	];
	setTimeout(()=>{
		actions.loadProfessorAll(professors);
		resolve(professors);
	}, 1000);
	
	});
}

export const loadCourse = (course) => {
	return { type: types.GET_COURSE , course} ;
};
export const fetchCourse = (actions, id) => {
	let course =  {
		    name: '실전프로젝트',
		    id: 0,
		    lectures:[],
		    professor:0,
		  };
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.loadCourse(course);
			resolve(course);
		}, 1000);
	});
};


export const addCourse = (actions, lectureId) => {
	let lecture = {
		    name: '실전프로젝트',
		    id: 0,
		    courses:[
		  {
		    name: '실프1-1',
		    id: 0,
		    course: 0
		  },
		  {
		    name: '실프1-2',
		    id: 1,
		    course: 0
		  }
		],
	    professor:{
		    name: '박재성',
		    id: 0
		  },
		  };
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.loadCourseAll(lecture);
			resolve(lecture);
		}, 1000);
	});
};

export const fetchLoadCourseAll = (actions, lectureId) => {
	let lecture = {
		    name: '실전프로젝트',
		    id: 0,
		    courses:[
		  {
		    name: '실프1-1',
		    id: 0,
		    course: 0
		  },
		  {
		    name: '실프1-2',
		    id: 1,
		    course: 0
		  }
		],
	    professor:{
		    name: '박재성',
		    id: 0
		  },
		  };
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.loadCourseAll(lecture);
			resolve(lecture);
		}, 1000);
	});
};
export const loadCourseAll = (lecture) => {
	
	return { type: types.GET_COURSE_ALL , lecture};
};