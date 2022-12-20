import './style.css';

//todo items are going to be objects thats created dynamically using factories
//title, description, dueDate, priority, notes, checklist
//grouped based on projects

//factory function
let projectListArray = ['project1', 'project2'];

let addProjectBtn = document.querySelector('.add-project');
let newProjectForm = document.querySelector('.new-project-form');
let closeProjectBtn = document.querySelector('#close')
let projectList = document.querySelector('.project-list')
let projectForm = document.querySelector('#new-project-form');
//add project form - title
let titleInput = document.querySelector('#title');

//I need to create an array of todo objects with the different properties
//that can be created by submitting a form e.g
// projectArray = 
// [{title: projectName, 
//   description: desc, 
//   dueDate: date, 
//   priority: low}]

const createProject = (title) => {
    
  return {title};
}

const showNewProject = (function() {
  addProjectBtn.addEventListener('click', () => {
    newProjectForm.style.display = "flex"

  })
  
})();

const closeNewProject = (function() {
  closeProjectBtn.addEventListener('click', () => {
    newProjectForm.style.display = "none"

  })
  
})();

//when add project form is submitted
const createNewProject = (function() {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectItem = document.createElement('li');
    projectItem.classList.add("projectList");
    projectList.appendChild(projectItem);
    projectItem.textContent = titleInput.value;
    
  })
})();

const addProjectToArray = (function(){
  for(const title of projectList.children) {
    projectListArray.push(title);
  }
})();

console.log(projectListArray);