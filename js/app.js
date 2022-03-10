function getAvailableCourses() {
	let courseOptionsHtml = "";
	fetch("https://golf-courses-api.herokuapp.com/courses", {
		method: "get",
	})
		.then((response) => {
			return response.json();
		})
		.then(() => {
			console.log(response);
		});
}

/*let courseOptionsHtml = '';
courses.forEach((course) => {
 courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
});
document.getElementById('course-select').innerHTML = courseOptionsHtml;*/
getAvailableCourses();
