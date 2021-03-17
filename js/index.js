// 1.elements selection:
const input = document.querySelector('.main-input');
const addButton = document.querySelector('.main-add-btn');
const deleteButton = document.querySelector('.main-delete-btn');
const todoList = document.querySelector('#todo-list');


const createTodo = (text, checked='') => {
    
    todoList.innerHTML = `
    <div class='d-flex w-100 align-items-center justify-content-center'>
        <input class="form-check-input m-1 item-checkbox" type="checkbox" ${checked}>
        <li class="rounded-1 w-75 border-0 list-group-item">
          ${text}
        </li>
        <button type="button" class="btn btn-success m-1 px-3">Edit</button>
        <button type="button" class="btn btn-danger m-1">Delete</button>
      </div>
    `


}

// 3.Events:
//add todo
addButton.addEventListener('click', function(e){
    //trim is necessary to avoid taking in account the spaces
    if(input.value.trim()){
        createTodo(target.value);
    }else{
        alert('Please, add a todo first!!')
    }
})

