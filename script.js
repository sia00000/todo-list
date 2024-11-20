let container = document.getElementsByClassName("container")[0];

let addtask = document.getElementsByClassName("newTask")[0];
let button = document.getElementsByClassName("add")[0];

let Update = document.querySelector(".updatask");

button.addEventListener("click", () => {
  if (!addtask.value) {
    alert("Enter the task");
    return;
  }
  let task = document.createElement("div");

  task.className = "task";
  console.log(addtask);

  task.innerHTML = `

  <p>
          ${addtask.value}

            <div class="icon">
							<span><i class="fa-solid fa-pen-to-square edit"\ ></i></span>
            <i class="fa-solid fa-trash delete"></i>
						</div>
          </p>

  `;

  addtask.value = "";

  container.appendChild(task);
  attachTaskListeners(task);
});

let attachTaskListeners = (task) => {
  let deleteTask = task.querySelector(".delete");
  deleteTask.addEventListener("click", () => {
    task.remove();
  });

  let editTask = task.querySelector(".edit");

  editTask.addEventListener("click", () => {
    Update.innerHTML = "";
    let editTaskitem = document.createElement("textarea");
    // editTaskitem.type = "text";
    editTaskitem.className = "edititem";
    editTaskitem.value = task.innerText.trim();

    let editbtn = document.createElement("button");
    editbtn.className = "editbtn";
    editbtn.innerText = "Update";

    Update.appendChild(editTaskitem);
    Update.appendChild(editbtn);

    editbtn.addEventListener("click", () => {
      Update.innerHTML = "";
      task.innerHTML = `
      
      <p>
      ${editTaskitem.value}
      
      <div class="icon">
      <span><i class="fa-solid fa-pen-to-square edit"\ ></i></span>
      <i class="fa-solid fa-trash delete"></i>
      </div>
      </p>
      
      `;

      attachTaskListeners(task);
    });
  });
};
