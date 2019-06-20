console.log('Good Morning');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]
//if you use this in the event handler its gonna give
//you the thing that genrated the event

$(document).ready(onReady);
//when the DOM (when page loads) is ready, we will render students
function onReady(){
    //this is what generated the event, the document being ready
    console.log('JQwery Works!', this);

    renderStudentList(playfair);

    //need to select something already in the DOM
    //can filter event to somehting dyamically generated
    //do this with the second arg to 'on' 
    $('#students').on('click', '.student', showAwesomeAlert);

}
//this function will be called when we click on a student
//It will show an alert saying that student is awesome.
function showAwesomeAlert (event) {
    //console.log('event', event);
    //console.log('this', this)
    //alert('check console log')
    let studentName = $(this).text();
    alert(`${studentName} is awesome!!`);
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
   $('#students').append(`<li class="student">${student}</li>`) 
}