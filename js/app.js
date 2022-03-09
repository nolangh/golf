function getAvailableCourses() {
	let courseOptionsHtml = "";
	fetch("https://golf-courses-api.herokuapp.com/courses")
		.then((courses) => {
			return courses.json();
		})
		.then((courses) => {
			console.log(courses);
		});

	/*
	courses.forEach((course) => {
		courseOptionsHtml += `<option value="${course}">${course.name}</option>`;
		console.log(courseOptionsHtml);
	}); */
}

console.log(getAvailableCourses());
//document.getElementById("course-select").innerHTML = courseOptionsHtml;
