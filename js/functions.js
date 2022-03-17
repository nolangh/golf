export { getAvailableCourses, getCourseImage };

<<<<<<< HEAD
// let myCourses = "";
=======
let myCourses = "";
let courseImages = "";
>>>>>>> 28dcaa1f212644868e0205c3e4648c9973093295
/* --------------------- ANCHOR request api information --------------------- */
/*function getAvailableCourses() {
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
} */

//reworked API call using await


async function getAvailableCourses() {
	let apiData = fetch("https://golf-courses-api.herokuapp.com/courses");
	const response = await apiData.json();
	const myCourses = await  
};

/*


function selectCourse() {
	let courseOptionsHtml = "";
	myCourses.courses.forEach((course) => {
		courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
		courseImages += `<h4>${course.name}</h4><img id= 'course-image' src= '${course.image}'>`;
	});
<<<<<<< HEAD
	// document.addEventListener("click", getCourseImage);
=======
>>>>>>> 28dcaa1f212644868e0205c3e4648c9973093295
	document.getElementById("course-select").innerHTML = courseOptionsHtml;
	document.getElementById("course-image").innerHTML = courseImages; //make the image only populate with an onClick("")
}

<<<<<<< HEAD

function getCourseImage() {
	let courseImages = "";
	myCourses.courses((course) => {
		//add new variable that is equal to the object ID
		courseImages += `<h4> ${course.name}</h4><img id= 'course-image' src= '${course.image}'>`;
	});
	document.getElementById("course-image").innerHTML = courseImages; //make the image only populate with an onClick("")
} 
*/
=======
/* -------------------- ANCHOR get course image on click -------------------- */
function getCourseImage() {}
>>>>>>> 28dcaa1f212644868e0205c3e4648c9973093295
