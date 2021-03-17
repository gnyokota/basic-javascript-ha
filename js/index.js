// 1.elements selection:
const input = document.querySelector('.main-input');
const addButton = document.querySelector('.main-add-btn');
const deleteButton = document.querySelector('.main-delete-btn');
const todoList = document.querySelector('#todo-list');
//--------------------------------------------------------
// Element used more than once:
//create checkBox:
const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('class','form-check-input m-1 checkbox-item'); 
checkboxInput.setAttribute('type','checkbox'); 

//function to create the todo items:
const createTodo = (text) => {
    // create the wrapper:
    const divWrapper = document.createElement("div");
    divWrapper.setAttribute('class','d-flex w-100 align-items-center justify-content-center todo-wrapper');
    //create li:
    const liTodo = document.createElement("li");
    liTodo.setAttribute('class','rounded-1 w-75 border-0 list-group-item');
    liTodo.append(checkboxInput);
    liTodo.innerHTML += text;
    //create edit button
    const editTodoButton = document.createElement("button");
    editTodoButton.setAttribute('class','edit-item btn btn-success m-1 px-3');
    editTodoButton.innerHTML = 'edit'; 
    //create delete button
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.setAttribute('class','delete-item btn btn-danger m-1');
    deleteTodoButton.innerHTML ='delete'; 
    //append elements inside wrapper:
    // divWrapper.appendChild(checkboxInput);
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

//toogle class with checkbox:
const doneItem = (e)=>{
    const item=e.target;
   if(item.checked){
     item.parentElement.classList.add('done-item');
   }else{
    item.parentElement.classList.remove('done-item');
   }
}

//function to delete just one item:
const deleteItem = (e)=>{
  const item=e.target;
  if(item.classList[0] === 'delete-item'){
    item.parentElement.remove();
  }
}

//function to edit just one item:
const editItem =(e)=>{
    const item=e.target;
    if(item.classList[0] === 'edit-item'){
        const li = item.parentElement.querySelector('LI');
        const editValue = prompt('Edit the selected element:', li.innerText)
        li.innerHTML='';
        li.append(checkboxInput);
        li.innerHTML += editValue;
    }
}

//---------------------------------------------------------
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
//check  done item
todoList.addEventListener('click', doneItem)
//remove one item
todoList.addEventListener('click', deleteItem)
//edit one item
todoList.addEventListener('click', editItem)


