// Search bar
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const courseitems = document.getElementById("course-list")
    const course = document.querySelectorAll(".course")
    const cname = courseitems.getElementsByTagName("h2")

    for(var i=0; i < cname.length; i++){
        let match = course[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                course[i].style.display = "";
            }else{
                course[i].style.display = "none";
            }
           
        }
    }
}


// Filter by level
function filterByLevel() {
    const levelFilter = document.getElementById("level-filter");
    const selectedLevel = levelFilter.value;
  
    const courseList = document.getElementById("course-list");
    const courses = courseList.getElementsByClassName("course");
  
    for (let i = 0; i < courses.length; i++) {
      const courseLevel = courses[i].querySelector(".c-details h3").textContent;
      if (selectedLevel === "all" || courseLevel === selectedLevel) {
        courses[i].style.display = "";
      } else {
        courses[i].style.display = "none";
      }
    }
  }
  
  const levelFilter = document.getElementById("level-filter");
  levelFilter.addEventListener("change", filterByLevel);




//  Sort by level from lowest to highest and vice versa 

// Get the select element for sorting
const sortSelect = document.getElementById('select');

// Get the course list element
const courseList = document.getElementById('course-list');

// Create an array to store the courses
let courses = [];

// Loop through all the course elements and add them to the array
courseList.querySelectorAll('.course').forEach(course => {
  courses.push(course);
});

// Function to sort courses based on level
function sortCourses() {
  // Get the selected sorting option
  const sortOption = sortSelect.options[sortSelect.selectedIndex].id;

  // Sort the courses based on the selected option
  if (sortOption === 'LowToHigh') {
    courses.sort((a, b) => {
      const levelA = a.querySelector('.c-details h3').textContent;
      const levelB = b.querySelector('.c-details h3').textContent;
      return levelA.localeCompare(levelB);
    });
  } else if (sortOption === 'HighToLow') {
    courses.sort((a, b) => {
      const levelA = a.querySelector('.c-details h3').textContent;
      const levelB = b.querySelector('.c-details h3').textContent;
      return levelB.localeCompare(levelA);
    });
  }

  // Clear the course list
  courseList.innerHTML = '';

  // Add the sorted courses back to the list
  courses.forEach(course => {
    courseList.appendChild(course);
  });
}

// Call the sortCourses function when the sorting option is changed
sortSelect.addEventListener('change', sortCourses);



// read more button
const parentContainer = document.querySelector('.course-list');
parentContainer.addEventListener('click', event=>{
  const current = event.target;
  const isReadMoreBtn = current.className.includes('read-more-btn');
  if(!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text--show');
  current.textContent = current.textContent.includes('Read More') ? 'Read Less...' : 'Read More...';
})