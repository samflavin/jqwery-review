console.log('Woot');

$(document).ready(onReady)

function onReady() {
    console.log('double woot');
    $('#add-task').on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask);
    $('#task-list').on('click', '.flag', flagTask);
    $('#clear-tasks').on('click', deleteAllTasks)
}

function addTaskHandler(event) {
    //Default action when you submit a form
    //-click " submit" type button inside a <form>-
    //is to refresh the page.  We want to prevent that!
    event.preventDefault();

    
    //console.log('clicked add task');
    const taskName = $('#task-name').val();
    console.log('clicked add task', taskName);

    // Add the task
    addTask(taskName);

    //clear out the form ffeid so we can enter new stuff!
    $('#task-name').val('')
}

function addTask(task) {
    console.log('adding the task', task)
    $('#task-list').append(
        `<li>
    ${task}
    <button class="delete">Delete</button>
    <button class="flag">Flag this task as an important task</button>
    </li>`);
}

function deleteTask(event) {
    console.log('clicked delete task', $(this).parent().text() );
    $(this).parent().remove();
}

function flagTask(event) {
    console.log('clicked the flag task button', $(this).parent().text())

    // We made a style class in css .important
    // WE want to select the <li> which is the parent of 'this' or
    //the thing we clicked on
    //$(this).parent().addClass('important');

    // If we want the button to add and remove the flag
    $(this).parent().toggleClass('important');
}
// This will remove all tasks from the task list
// when we click the remove all button
function deleteAllTasks (event) {
    $('#task-list').empty();
}