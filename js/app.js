function getAvailableCourses() {
	return fetch("https://golf-courses-api.herokuapp.com/courses", {
		method: "GET",
	}).then((res) => res.json());
}

console.log(getAvailableCourses());

/*let courseOptionsHtml = "";
courses.forEach((course) => {
	courseOptionsHtml += `<option value="${course}">${course.name}</option>`;
	console.log(courseOptionsHtml);
});
document.getElementById("course-select").innerHTML = courseOptionsHtml;
*/
