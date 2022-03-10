const myCourses = [];

function getAvailableCourses() {
	fetch("https://golf-courses-api.herokuapp.com/courses", {
		method: "get",
	})
		.then((response) => {
			return response.json();
		})
		.then((info) => {
			console.log(info);
			myCourses = info; //try seeing if I can declare the variable in this statment
		})
		.then(() => {
			showCourse();
		});
}

function showCourse() {
	let courseOptionsHtml;
	courseOptionsHtml.forEach((course) => {
		courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
	});
	document.getElementById("course-select").innerHTML = courseOptionsHtml;
}
