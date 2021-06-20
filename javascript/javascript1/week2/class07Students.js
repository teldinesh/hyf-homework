// copy your homework solution here to make the webpage work!

const class07Students = [];
let count = 0;
function addStudentToClass(studentName) {
   if (studentName.toLowerCase() == 'queen') {
class07Students.push(studentName);
  }
  else if ((class07Students.indexOf(studentName) !== -1) || (studentName == '' ) ){
    return 'Cannot add same students to class 07';
 }
  else if (class07Students.length >=6 ) {
    return 'Cannot add more students to class 07';
 }
  else {
    class07Students.push(studentName);
  return 'Successfully added $studentName to the class';
  }
}


function getNumberOfStudents() {
    if (class07Students.length < 6) {
    return class07Students.length;
}
  else
  {
    return 'Cannot add more students to class 07';
  }
}


// You dont need to understand any of this! At least not yet :)
const studentInput = document.querySelector("input");
const ul = document.querySelector("ul");
const span = document.querySelector("span");
document.querySelector("button").addEventListener("click", () => {
    const studentName = studentInput.value;
    addStudentToClass(studentName);
    ul.innerHTML = "";
    class07Students.forEach(class07Student => {
        const li = document.createElement("li");
        li.innerHTML = class07Student;
        if (class07Student.toLowerCase() === "queen") {
            li.classList.add("queen");
            li.innerHTML = `${class07Student} 👑`;
        }
        ul.appendChild(li);
    });

    span.innerHTML = `Number of students: ${getNumberOfStudents()}`;
});