console.log('Good Morning');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]


$(document).ready(onReady);
//when the DOM (when page loads) is ready, we will render students
function onReady(){
    console.log('JQwery Works!');
    renderStudentList(playfair);
}

//looping through arguemnt array and passing each item to 
//renderStudent function
function renderStudentList(studentList) {
    for ( student of studentList ){
        renderStudent(student);
    }
}

//targeting ul from html and creates li for each index
//of studentlist
function renderStudent(student) {
   $('#students').append(`<li>${student}</li>`) 
}