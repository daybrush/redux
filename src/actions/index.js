import * as types from '../constants/ActionTypes'

export const loadCoursesByProfessor = (id, courses) => {
	return { type: types.GET_COURSE_IN_PROFESSOR , courses, id};
};
export const loadProfessorAll = (professors) => {
	return { type: types.GET_PROFESSOR_ALL , professors} ;
};
export const loadMyLectures = (lectures) => {
	return { type: types.GET_MY_LECTURES , lectures} ;
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
export const fetchLoadMyLectures = (actions) => {
	return new Promise((resolve, reject) => {
	let lectures = [{
		    name: '실전프로젝트',
		    id: 0,
		    status : 0,
		    
		    professor: {
			    name: "박재성1"
		    }
		    
		    },{
		    name: '실전프로젝트2',
		    id: 1,
		    status : 0,
		    
		    		    professor: {
			    name: "박재성2"
		    }
		    
		    },{
		    name: '실전프로젝트3',
		    id: 2,
		    status : 0,
		    
		    		    professor: {
			    name: "박재성3"
		    }
		    
		    }]
	setTimeout(()=>{
		actions.loadMyLectures(lectures);
		resolve(lectures);
	}, 1000);
	
	});
}
export const fetchAddMyLecture = (actions, lectureId) => {
	return new Promise((resolve, reject) => {
	let lecture = {
		    name: '실전프로젝트',
		    id: 0,
		    status : 0,
		    
		    		    professor: {
			    name: "박재성1"
		    }
		  };
	setTimeout(()=>{
		actions.addMyLecture(lecture);
		resolve(lecture);
	}, 1000);
	
	});
}
export const addMyLecture = (lecture) => {
	
	return { type: types.ADD_MY_LECTURE , lecture};
};
export const loadCourse = (course) => {
	return { type: types.GET_COURSE , course} ;
};
export const fetchLoadCourse = (actions, id) => {
	let course =  {
		title:"실습1-1",
		lectureId: 0,
		id: 0,
		goals: [
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
],
	
		attachments: [
		{id: 0, name : "att1"},
		{id: 1, name : "att2"},
		{id: 2, name : "att3"},
		]
		
	};
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.loadCourse(course);
			resolve(course);
		}, 1000);
	});
};


export const fetchAddCourse = (actions, title, lectureId) => {
	let course =
		  {
		    title: title,
		    id: Math.random(0, 30),
		    lectureId : lectureId,
		    goals: [
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
],
	
		attachments: [
		{id: 0, name : "att1"},
		{id: 1, name : "att2"},
		{id: 2, name : "att3"},
		]
		  };
		  
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			actions.addCourse(course);
			resolve(course);
		}, 1000);
	});
};
export const addCourse = (course) => {
	
	return { type: types.ADD_COURSE , course};
};
export const fetchLoadCourseAllByCourseId = (actions, courseId) => {
	let lecture = {
		    name: '실전프로젝트',
		    id: 0,
		    status : 0,
		    courses:[
		  {
		    title: '실프1-1',
		    id: 0,
		    course: 0,
		    goals:[
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
]
		  },
		  {
		    title: '실프1-2',
		    id: 1,
		    course: 0,
		    goals:[
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
]
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
		    status : 0,
		    courses:[
		  {
		    title: '실프1-1',
		    id: 0,
		    course: 0,
		    goals:[
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
]
		  },
		  {
		    title: '실프1-2',
		    id: 1,
		    course: 0,
		    goals:[
		{id: 0, title : "goal1"},
		{id: 1, title : "goal2"},
		{id: 2, title : "goal3"},
]
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



