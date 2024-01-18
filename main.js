document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput')
    const itemList = document.getElementById('itemList')

    function addTask() {
        const taskText = taskInput.value.trim()
       
        if(taskText !== '') {

            // create elements
            
            const li = document.createElement('li')
            const taskLabel = document.createElement('span')
            const deleteButton = document.createElement('button')
            const checkbox = document.createElement('input')
            const updateButton = document.createElement('button')

            checkbox.type = 'checkbox'

            taskLabel.textContent = taskText
            deleteButton.textContent = 'Eliminar'
            updateButton.textContent = 'Editar'


            //styles

            li.className = 'text-w'

            updateButton.className = 'text-w btn-secondary'
            deleteButton.className = 'text-w btn-del'


            //events
            deleteButton.addEventListener('click', deleteTask)
            updateButton.addEventListener('click', updateTask)
            checkbox.addEventListener('change', completeTask)

            //add
            li.appendChild(checkbox)
            li.appendChild(taskLabel)
            li.appendChild(updateButton)
            li.appendChild(deleteButton)

            


            itemList.appendChild(li)

            taskInput.value = ''
        }
    }

    function deleteTask(e) {
        const item = e.target.parentNode

        itemList.removeChild(item)
    }

    function updateTask(e) {
        const item = e.target.parentNode

        const taskLabel = item.querySelector('span')

        const inputField = document.createElement('input')

        inputField.type = 'text'

        item.replaceChild(inputField,taskLabel)

        inputField.focus()

        inputField.addEventListener('keydown', function(e) {

            if(e.key === 'Enter') {

                taskLabel.textContent = inputField.value

                item.replaceChild(taskLabel,inputField)
            }
        })
    }

    function completeTask(e) {
        
        const checkbox = e.target

        const item = checkbox.parentNode

        const taskLabel = item.querySelector('span')

        if(checkbox.checked) {

            taskLabel.style.textDecoration = 'line-through'
        } else {
            taskLabel.style.textDecoration = 'none'
        }
    }

    document.getElementById('addButton').addEventListener('click', addTask)
})