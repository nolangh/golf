let myCourses = "";

function getAvailableCourses() {
	fetch("https://golf-courses-api.herokuapp.com/courses")
		.then((response) => {
			return response.json();
		})
		.then((info) => {
			myCourses = info; //try seeing if I can declare the variable in this statment
			console.log(info);
		})
		.then(() => {
			selectCourse();
		});
}

function selectCourse() {
	let courseOptionsHtml = "";
	let courseImages = "";
	myCourses.courses.forEach((course) => {
		courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
		courseImages += `<h4> ${course.name}</h4><img id= 'course-image' src= '${course.image}'>`; //this will go into the show course function
	});

	document.getElementById("course-select").innerHTML = courseOptionsHtml;
	document.getElementById("course-image").innerHTML = courseImages; //make the image only populate with an onClick("")
}

getAvailableCourses();
