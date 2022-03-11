export { getAvailableCourses, getCourseImage };

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

	myCourses.courses.forEach((course) => {
		courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
	});
	document.addEventListener("click", getCourseImage);
	document.getElementById("course-select").innerHTML = courseOptionsHtml;
}

/* -------------------- ANCHOR get course image on click -------------------- */
function getCourseImage() {
	let courseImages = "";
	myCourses.courses((course) => {
		//add new variable that is equal to the object ID
		courseImages += `<h4> ${course.name}</h4><img id= 'course-image' src= '${course.image}'>`;
	});
	document.getElementById("course-image").innerHTML = courseImages; //make the image only populate with an onClick("")
}
