// Initialize tasks from localStorage or start with empty arrays
let tasks = JSON.parse(localStorage.getItem('tasks')) || {
    todo: [],
    inProgress: [],
    done: []
};

// Initialize custom columns from localStorage
let customColumns = JSON.parse(localStorage.getItem('customColumns')) || [];

// Variables for edit functionality
let currentEditTask = null;
let currentEditColumn = null;

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Save custom columns to localStorage
function saveCustomColumns() {
    localStorage.setItem('customColumns', JSON.stringify(customColumns));
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add new task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText) {
        const task = {
            id: generateId(),
            text: taskText
        };
        
        tasks.todo.push(task);
        saveTasks();
        renderTasks();
        input.value = '';
    }
}

// Delete task
function deleteTask(id, column) {
    tasks[column] = tasks[column].filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Delete column
function deleteColumn(columnId) {
    // Move tasks from this column back to todo
    if (tasks[columnId] && tasks[columnId].length > 0) {
        tasks.todo = [...tasks.todo, ...tasks[columnId]];
    }
    
    // Delete the column's tasks
    delete tasks[columnId];
    
    // Remove from custom columns
    customColumns = customColumns.filter(col => col.id !== columnId);
    
    // Remove the column element from DOM
    const columnElement = document.getElementById(columnId);
    if (columnElement) {
        columnElement.remove();
    }
    
    // Save changes
    saveTasks();
    saveCustomColumns();
}

// Edit task functions
function openEditModal(id, column) {
    const task = findTask(id);
    if (!task) return;

    currentEditTask = task;
    currentEditColumn = column;

    const modal = document.getElementById('editModal');
    const input = document.getElementById('editTaskInput');
    
    input.value = task.text;
    modal.style.display = 'block';
    input.focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    if (modalId === 'editModal') {
        currentEditTask = null;
        currentEditColumn = null;
    }
}

function saveEdit() {
    if (!currentEditTask || !currentEditColumn) return;

    const input = document.getElementById('editTaskInput');
    const newText = input.value.trim();

    if (newText) {
        currentEditTask.text = newText;
        saveTasks();
        renderTasks();
        closeModal('editModal');
    }
}

// Add Column functions
function openAddColumnModal() {
    const modal = document.getElementById('addColumnModal');
    const input = document.getElementById('columnNameInput');
    modal.style.display = 'block';
    input.value = '';
    input.focus();
}

function addNewColumn() {
    const input = document.getElementById('columnNameInput');
    const columnName = input.value.trim();
    
    if (columnName) {
        const columnId = 'column_' + generateId();
        const newColumn = {
            id: columnId,
            name: columnName
        };
        
        customColumns.push(newColumn);
        tasks[columnId] = []; // Initialize empty task array for new column
        
        saveCustomColumns();
        saveTasks();
        renderBoard();
        closeModal('addColumnModal');
    }
}

// Render functions
function renderTasks() {
    // Render tasks for default columns
    ['todo', 'inProgress', 'done'].forEach(renderColumnTasks);
    
    // Render tasks for custom columns
    customColumns.forEach(column => renderColumnTasks(column.id));
}

function renderColumnTasks(columnId) {
    const columnEl = document.querySelector(`#${columnId} .task-list`);
    if (!columnEl) return;
    
    columnEl.innerHTML = '';
    
    if (tasks[columnId]) {
        tasks[columnId].forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = 'task';
            taskEl.draggable = true;
            taskEl.id = task.id;
            
            taskEl.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="edit-btn" onclick="openEditModal('${task.id}', '${columnId}')">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="delete-btn" onclick="deleteTask('${task.id}', '${columnId}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            taskEl.addEventListener('dragstart', dragStart);
            taskEl.addEventListener('dragend', dragEnd);
            
            columnEl.appendChild(taskEl);
        });
    }
}

function renderBoard() {
    const board = document.getElementById('mainBoard');
    
    // Clear existing custom columns
    customColumns.forEach(column => {
        const existingColumn = document.getElementById(column.id);
        if (existingColumn) {
            existingColumn.remove();
        }
    });
    
    // Render custom columns
    customColumns.forEach(column => {
        const columnEl = document.createElement('div');
        columnEl.className = 'column custom-column';
        columnEl.id = column.id;
        
        columnEl.innerHTML = `
            <div class="column-header">
                <h2>${column.name}</h2>
                <button class="delete-btn" onclick="deleteColumn('${column.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="task-list" ondrop="drop(event)" ondragover="allowDrop(event)">
            </div>
        `;
        
        board.appendChild(columnEl);
    });
    
    renderTasks();
}

// Drag and Drop functions
function dragStart(e) {
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const task = findTask(taskId);
    
    if (!task) return;
    
    // Remove from old column
    const oldColumn = Object.keys(tasks).find(column => 
        tasks[column].some(t => t.id === taskId)
    );
    
    if (oldColumn) {
        tasks[oldColumn] = tasks[oldColumn].filter(t => t.id !== taskId);
    }
    
    // Add to new column
    const newColumn = e.target.closest('.column').id;
    if (!tasks[newColumn]) {
        tasks[newColumn] = [];
    }
    tasks[newColumn].push(task);
    
    saveTasks();
    renderTasks();
}

// Helper function to find task by ID
function findTask(id) {
    for (const column in tasks) {
        const task = tasks[column].find(t => t.id === id);
        if (task) return task;
    }
    return null;
}

// Event Listeners
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.getElementById('editTaskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        saveEdit();
    }
});

document.getElementById('columnNameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addNewColumn();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal('editModal');
        closeModal('addColumnModal');
    }
});

document.addEventListener('dragstart', function(e) {
    if (e.target.classList.contains('task')) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
});

// Click outside modal to close
window.addEventListener('click', function(e) {
    const editModal = document.getElementById('editModal');
    const addColumnModal = document.getElementById('addColumnModal');
    
    if (e.target === editModal) {
        closeModal('editModal');
    } else if (e.target === addColumnModal) {
        closeModal('addColumnModal');
    }
});

// Initial render
renderBoard(); 