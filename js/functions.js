// export { getAvailableCourses, getCourseImage };
const select = document.getElementById("course-select");
const images = document.getElementById("courseImage");

let myCourses = "";

function getAvailableCourses() {
	fetch("https://golf-courses-api.herokuapp.com/courses")
		.then((response) => {
			//passes api into this function
			return response.json(); //returns the api information to .JSON
		})
		.then((info) => {
			//takes the .JSON and grabs the data from the .JSON
			myCourses = info; // Assigns the .JSON data to variable myCourses
			console.log(myCourses);
		})
		.then(() => {
			selectCourse(); // calls the select course function
		});
}

/* os.addEventListener("change", () => {
	courseImage = pos.options[pos.selectedIndex].value;
	return fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setName}`, {
		method: "GET",
		headers: {
			"X-api-key": apiKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((filteredSet) => {
			allPokemon = filteredSet;
			console.log(allPokemon);
		})
		.then(() => {
			allPokemon.data.forEach((data) => {
				createCard(data);
			});
		});
}); */

function selectCourse() {
	let courseOptionsHtml = "";

	myCourses.courses.forEach((course) => {
		courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;

		console.log(courseOptionsHtml.option);
		images.src = `${course.image}`;
	});
	// document.addEventListener("click", getCourseImage);
	//courseImages += `<h4>${course.name}</h4><img id= 'course-image' src= '${course.image}'>`;
	document.getElementById("course-select").innerHTML = courseOptionsHtml;
	courseImage = pos.options[pos.selectedIndex].value;

	//document.getElementById("course-image").innerHTML = courseImages; //make the image only populate with an onClick("")
}

getAvailableCourses();
