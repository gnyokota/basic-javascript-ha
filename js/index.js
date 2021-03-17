// 1.elements selection:
const input = document.querySelector('.main-input');
const addButton = document.querySelector('.main-add-btn');
const deleteButton = document.querySelector('.main-delete-btn');
const todoList = document.querySelector('#todo-list');

//function to create the todo items:
const createTodo = (text) => {
    // create the wrapper:
    const divWrapper = document.createElement("div");
    divWrapper.setAttribute('class','d-flex w-100 align-items-center justify-content-center');
    //create checkBox:
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('class','form-check-input m-1 item-checkbox'); 
    checkboxInput.setAttribute('type','checkbox'); 
    //create li:
    const liTodo = document.createElement("li");
    liTodo.setAttribute('class','rounded-1 w-75 border-0 list-group-item');
    liTodo.innerHTML = text; 
    //create edit button
    const editTodoButton = document.createElement("button");
    editTodoButton.setAttribute('class','btn btn-success m-1 px-3');
    editTodoButton.innerHTML = 'edit'; 
    //create delete button
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.setAttribute('class','btn btn-danger m-1');
    deleteTodoButton.innerHTML ='delete'; 
    //append elements inside wrapper:
    divWrapper.appendChild(checkboxInput);
    divWrapper.appendChild(liTodo);
    divWrapper.appendChild(editTodoButton);
    divWrapper.appendChild(deleteTodoButton);
    //append the wrapper inside the ul:
    todoList.append(divWrapper);
}

//function to add todo item:
const addTodo =()=>{
    //trim is necessary to avoid taking in account the spaces
    if(input.value.trim()){
        createTodo(input.value);
        //to empty the input field
        input.value=''
    }else{
        alert('Please, add a todo first!!')
    }
}

// function to delete all todos:
const deleteAll = ()=>{
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
}

// 3.Events:
//add todo clicking:
addButton.addEventListener('click', addTodo)

//add todo with ENTER
input.addEventListener('keypress',function(e){ 
    if(e.keyCode === 13){
        addTodo();
    }
})

//remove all 
deleteButton.addEventListener('click', deleteAll)
