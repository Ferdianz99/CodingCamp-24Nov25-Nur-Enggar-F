/// Temporary storage for todo items
let todo = []

fucntion validateform(){
    /// Get input values
    conts todo = document.getElementById('todo-input').Value;
    conts date = document.getElementById('todo-date').value;

    //validasi  input todo and date 
    if (todo ==='' || date ===''){
        alert ('Please fill in both the todo itemand the due date.');
    } else {
        addTodo(todo,date);
    
        // Clear input fields after adding todo
        document.getElementById('todo-input').value = '';
        document.getElementById('todo-date').value = '';
    
    }

  /// Function to add a new todo item
function addTodo(todo,date) {
    /// Create a todo item object
    const todoitems = (
        task: todo,
        date: date,
    }

    /// add todo item to the todo array
    todos.push{todoitem};
    renderTodos
/// Function to render todo to teh DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((item, index) => {
        todoList.innerHTML += '
        <li>
            <p class="text-2xl">${todo.task} <spam class="text-sm text-grey-500">(${todo.date})</spam></p>
            <hr />
        </li>'
        
    });
}
function clearTodos() {
    todos = [];
    renderTodos();
}

/// Function to filter todo items
function filter() {