class Task{
    constructor(taskEntered){
        this.taskEntered = taskEntered;
    }
}

class UserInterface{
    constructor(){
        this.tableBody = document.getElementById("table-body");
        this.taskInput = document.getElementById("task-input");
        this.tasks = [];
    }

    bindEventListeners(){
        let add = document.getElementById("add-button");
        add.addEventListener('click', (e) => this.submitTask());
    }
   
    submitTask(){

        const task = new Task(
            this.taskInput.value
        );

        this.tasks.push(task);
        this.addTasks();

        this.taskInput.value = '';
    }

    addTasks(){
        this.tableBody.innerHTML = '';

        for(const task of this.tasks){
            const row = document.createElement('tr');

            const taskCol = document.createElement('td');
            const completed = document.createElement('td');
            const actionsCell = document.createElement('td');
            const removeButtonCell = document.createElement('td');

            const actions = document.createElement('button');
            const removeButton = document.createElement('button');

            taskCol.innerHTML = task.taskEntered;
            completed.innerHTML = 'Not Completed';
            actions.innerHTML = 'Done';
            actions.classList.add('btn-dark');
            removeButton.innerHTML = 'X';
            removeButton.classList.add('btn-outline-danger');
            
            actions.addEventListener('click', (e) => this.onActionsButtonClicked(completed));
            actionsCell.append(actions);
            removeButton.addEventListener('click', (e) => this.onRemoveButtonClicked(task));
            removeButtonCell.append(removeButton);

            row.append(taskCol);
            row.append(completed);
            row.append(actionsCell);
            row.append(removeButtonCell);
            this.tableBody.append(row);
        }
    }

    onActionsButtonClicked(completed){
        completed.innerHTML = 'Completed';
    }

    onRemoveButtonClicked(taskToRemove){
        this.tasks = this.tasks.filter((task) =>{
            return task.taskEntered !== taskToRemove.taskEntered;
        });
        this.addTasks();
    }
}

const userInterface = new UserInterface();
userInterface.bindEventListeners();