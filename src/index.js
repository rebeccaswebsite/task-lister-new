document.addEventListener("DOMContentLoaded", () => {
  const tasksEl = document.getElementById("tasks")
  const formEl = document.getElementById("create-task-form")
  const input = document.getElementById("new-task-description")

  function addTask (task) {
    const li = document.createElement('li')

    li.innerHTML = "task <button class='delete-btn'>X</button>"

    tasksEl.append(li)

    const deleteBtn = li.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', function (event) {
      li.remove()
    })
  }

  formEl.addEventListener('submit', function(event) {
    event.preventDefault()
  
    let task = input.value

    addTask(task)
  })

});


