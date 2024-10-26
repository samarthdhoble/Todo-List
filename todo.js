
// TODOLIST ARRAY AND EACH ARRAY ELEENTR IS THE OBJECT. THE PERPOSE BEHIND THIS IS TO STORE THE NAME OF THE TODO WITH ITS DATE/DUEDATE.
let todoList = [];

renderTodo();



function renderTodo(){ // THIS FUNTION IS FOR DISPLAYING THE TASK LIST ON THE WEB PAGE.

    let todoListHTML = '';


    for(let task = 0; task <= todoList.length - 1; task++){

        let taskObject = todoList[task];
        
        const { name } = taskObject; // FETCHING THE OBJECT NAME PROPERTY.
        
        const { dueDate } = taskObject; // FETCHING THE OBJECT DUEDATE PROPERTY.


        
        //ADDING ELEMENT <P> USING JAVASCRPIT AND WRITING ON CLICK OF DELETE BUTTONS OF TASK.
        const html = `
        <div class="css-task-field">${name}</div>
        <div class="css-dueDate-field"> ${dueDate}</div>
        <button class="css-delete-btn" onclick=
            "todoList.splice(${task},1); 
            renderTodo();
            ">
            Delet
        </button>`;


        todoListHTML += html; // ADD THE HTML OF NEW PARAGRAPGH I.E NEW TASK TO THE PREVIOUS TASK. 
    }

    const todoDisplay = document.querySelector('.js-todo-element');
    todoDisplay.innerHTML = todoListHTML; // CHANGING THE INNERHTML OF THE DIV THAT WE GONNA USED TO DISPLAY THE TODO TASKS.    
}


// ADDING A LISTER TO THE WHOLE DOCUMENT OBJECT BECOAUSE OF THAT WHEN I RANDOMLY CLICK THE DELETE BUTTON THE KEYBOARD LAST ENTERD TASK WILL BE DELETED.
document.addEventListener('keydown', function(event) {
    keydelete(event); // Check for Delete key.
});


// cerating tthe keyboard funtions
function keyEnter(event){
    if(event.key === 'Enter'){

        addTodo();
    }
}

// CRCEATING A KEYDOWN EVENT TO POP THE LAST ENTERED TASK FROM THE TODOLIST.
function keydelete(event){
    if(event.key === 'Delete'){
        todoList.pop();
        renderTodo();
    }
}

function addTodo(){
    
    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate= dateInputElement.value;

    const inputElement = document.querySelector('.js-input-element');
    
    const name = inputElement.value;

    todoList.push({
        name : name ,
        dueDate : dueDate
    });
    
    inputElement.value = '';
    dateInputElement.value = 'dd-mm-yy';
    
    renderTodo();
}


