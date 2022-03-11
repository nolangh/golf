export { getAvailableCourses };

let myCourses = "";

/* --------------------- ANCHOR request api information --------------------- */
function getAvailableCourses() {
	fetch("https://golf-courses-api.herokuapp.com/courses")
		.then((response) => {
			//passes api into this function
			return response.json(); //returns the api information to .JSON
		})
		.then((info) => {
			//takes the .JSON and grabs the data from the .JSON
			myCourses = info; // Assigns the .JSON data to variable myCourses
			console.log(info);
		})
		.then(() => {
			selectCourse(); // calls the select course function
		});
}

/* ----------- ANCHOR assigns api information to html information ----------- */
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
