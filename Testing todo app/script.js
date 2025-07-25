document.getElementById('theme-toggle').onclick = function () {
  document.body.classList.toggle('dark');
};

let taskId = 0;
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(task) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.draggable = true;
  taskDiv.id = task.id;
  taskDiv.ondragstart = drag;
  taskDiv.innerHTML = `
    <div class="task-content">${task.name}</div>
    <div class="time">
      ${task.time} <br>
      ${task.date}
    </div>
    <div class="task-buttons">
      <button class="btn-copy" title="Copy"><i class="ri-file-copy-line"></i></button>
      <button class="btn-edit" title="Edit"><i class="ri-pencil-fill"></i></button>
      <button class="btn-delete" title="Delete"><i class="ri-close-circle-line"></i></button>
    </div>
  `;

  taskDiv.querySelector('.btn-delete').onclick = e => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  taskDiv.querySelector('.btn-edit').onclick = e => {
    e.stopPropagation();
    editTask(task.id);
  };

  taskDiv.querySelector('.btn-copy').onclick = e => {
    e.stopPropagation();
    copyTask(task.id);
  };

  return taskDiv;
}

function renderTasks() {
  ['todo', 'progress', 'complete'].forEach(col => {
    const list = document.getElementById(`${col}-list`);
    list.innerHTML = '';
    tasks.filter(t => t.status === col).forEach(task => {
      list.appendChild(createTaskElement(task));
    });
  });
}

function addTask(name, col = "todo") {
  const now = new Date();
  const task = {
    id: `task-${taskId++}-${Date.now()}`,
    name,
    status: col,
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: now.toLocaleDateString()
  };
  tasks.push(task);
  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
  saveTasks();
  renderTasks();
}

function editTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  const newTaskName = prompt("Edit task", task.name);
  if (newTaskName !== null) {
    const trimmedName = newTaskName.trim();
    if (trimmedName) {
      task.name = trimmedName;
      saveTasks();
      renderTasks();
    }
  }
}

function copyTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(task.name).then(() => {
      alert('Task copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy: ', err);
    });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = task.name;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      alert(successful ? 'Task copied to clipboard!' : 'Failed to copy');
    } catch {
      alert('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
  }
}

function allowDrop(ev) { ev.preventDefault(); }

function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }

function drop(ev) {
  ev.preventDefault();
  let id = ev.dataTransfer.getData("text");
  let el = document.getElementById(id);
  if (el) {
    ev.currentTarget.querySelector('.task-list').appendChild(el);

    const col = ev.currentTarget.id;
    let taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex].status = col;
      saveTasks();
    }
  }
}

window.onload = function () {
  if (tasks.length > 0) {
    taskId = tasks.length;
    renderTasks();
  }
};

document.getElementById('add-task-btn').onclick = function () {
  const inp = document.getElementById('new-task');
  let val = inp.value.trim();
  if (val) {
    addTask(val, "todo");
    inp.value = '';
  }
};

document.getElementById('filter-input').oninput = function (e) {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.task').forEach(task => {
    task.style.display = task.textContent.toLowerCase().includes(query) ? "" : "none";
  });
};

window.allowDrop = allowDrop;
window.drag = drag;
window.drop = drop;
