// Global variables
const input = document.getElementById('task-input');
const incompleteTaskList = document.querySelector('.incomplete-task');
const completeList = document.getElementById('complete-list');
const addSVG = `<svg width="22px" height="22px" viewBox="-18 -18 572.01 572" xmlns="http://www.w3.org/2000/svg">
                <path class="tick-mark01" d="m268.16-0.074219c-108.46-0.019531-206.24 65.309-247.75 165.51-41.496 100.21-18.543 215.54 58.172 292.21 104.7 104.7 274.45 104.7 379.15 0 104.7-104.7 104.7-274.45 0-379.15-50.168-50.453-118.43-78.746-189.58-78.574zm0 511.36c-134.07 0-243.2-109.13-243.2-243.21s109.13-243.2 243.2-243.2 243.21 109.13 243.21 243.2-109.13 243.21-243.21 243.21z"/>
                <path class="tick-mark02" d="m395.62 185.64-161.01 153.9-87.805-87.68c-4.8555-4.8555-12.727-4.8555-17.586 0-4.8555 4.8594-4.8555 12.73 0 17.59l96.41 96.41c2.3398 2.3516 5.5352 3.6562 8.8555 3.6133 3.2188 0.03125 6.3164-1.2266 8.6055-3.4922l169.74-162.26c4.9219-4.7695 5.082-12.613 0.36328-17.578-4.7266-4.9609-12.566-5.1875-17.574-0.50781z"/>
                </svg>`;
const deleteSVG = `<svg width="22px" height="22px" viewBox="-57 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path class="delete-btn" d="m156.37 30.906h85.57v14.398h30.902v-16.414c0.003906-15.93-12.949-28.891-28.871-28.891h-89.633c-15.922 0-28.875 12.961-28.875 28.891v16.414h30.906z"/>
                <path class="delete-btn" d="m344.21 167.75h-290.11c-7.9492 0-14.207 6.7812-13.566 14.707l24.254 299.91c1.3516 16.742 15.316 29.637 32.094 29.637h204.54c16.777 0 30.742-12.895 32.094-29.641l24.254-299.9c0.64453-7.9258-5.6133-14.707-13.562-14.707zm-219.86 312.26c-0.32422 0.019531-0.64844 0.03125-0.96875 0.03125-8.1016 0-14.902-6.3086-15.406-14.504l-15.199-246.21c-0.52344-8.5195 5.957-15.852 14.473-16.375 8.4883-0.51562 15.852 5.9492 16.375 14.473l15.195 246.21c0.52734 8.5195-5.9531 15.848-14.469 16.375zm90.434-15.422c0 8.5312-6.918 15.449-15.453 15.449s-15.453-6.918-15.453-15.449v-246.21c0-8.5352 6.918-15.453 15.453-15.453 8.5312 0 15.453 6.918 15.453 15.453zm90.758-245.3-14.512 246.21c-0.48047 8.2109-7.293 14.543-15.41 14.543-0.30469 0-0.61328-0.007812-0.92188-0.023437-8.5195-0.50391-15.02-7.8164-14.516-16.336l14.508-246.21c0.5-8.5195 7.7891-15.02 16.332-14.516 8.5195 0.5 15.02 7.8164 14.52 16.336z"/>
                <path class="delete-btn" d="m397.65 120.06-10.148-30.422c-2.6758-8.0195-10.184-13.43-18.641-13.43h-339.41c-8.4531 0-15.965 5.4102-18.637 13.43l-10.148 30.422c-1.957 5.8672 0.58984 11.852 5.3438 14.836 1.9375 1.2148 4.2305 1.9453 6.75 1.9453h372.8c2.5195 0 4.8164-0.73047 6.75-1.9492 4.7539-2.9844 7.3008-8.9688 5.3438-14.832z"/>
                </svg>`;

const div = document.getElementById('showCompleteTask');

let data = { // Data object
    incompleteArray: [],
    completeArray: []
};

//          Delete Task Function

function taskDeleted() {
    let item = this.parentNode.parentNode; // ul
    let parent = this.parentNode;  // list item that needs to be removed
    let id = item.id;
    let textItemValue = parent.innerText;

    console.log(textItemValue);

    if(id === 'todo-list') {
        console.log(id);
        data.incompleteArray.splice(data.incompleteArray.indexOf(textItemValue), 1);
    }else{
        data.completeArray.splice(data.completeArray.indexOf(textItemValue), 1);
        console.log(id);
    }

    console.log(data);
    item.removeChild(parent);
}

//          Show Div Function

function hideDiv() {
    div.classList.remove('show');
    div.style.display = 'none';
}

hideDiv;

//          Complete Task Function

function taskCompleted() {
    
    div.style.display = 'block';
    div.classList.add('show');
    div.textContent = 'Completed';
    
    let item = this.parentNode.parentNode; // Type of list
    let parent = this.parentNode;
    let id = item.id;
    console.log('id: ' + id);
    let textVal = parent.innerText;
    console.log(textVal);

    if(id === 'todo-list') {
        data.incompleteArray.splice(data.incompleteArray.indexOf(textVal), 1);
        data.incompleteArray.push(textVal);
        console.log(data);
    }else {
        data.incompleteArray.splice(data.incompleteArray.indexOf(textVal), 1);
        data.incompleteArray.unshift(textVal);
        console.log(data);
    }

    let target = (id === 'todo-list') ? document.getElementById('complete-list') : document.getElementById('todo-list');
    // item.removeChild(parent);
    target.insertBefore(parent, target.lastChild);
}

//          Create DOM      

function createDOM(dataArray) {
    for(let i = 0; i < dataArray.length; i++) {
        
        let taskItems = dataArray[i];
        let generatedList = document.createElement('li');
        generatedList.setAttribute('id', 'list-items');

        let completeButton = document.createElement('button');
        completeButton.setAttribute('class', 'add');
        completeButton.innerHTML = addSVG;

        let removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'delete');
        removeButton.innerHTML = deleteSVG;

        let taskItemsContainer = document.createElement('span');
        taskItemsContainer.textContent = taskItems;

        generatedList.appendChild(completeButton);
        generatedList.appendChild(taskItemsContainer);
        generatedList.appendChild(removeButton);
        incompleteTaskList.appendChild(generatedList);

        completeButton.addEventListener('click', taskCompleted);
        removeButton.addEventListener('click', taskDeleted);
    }
}

function inputTask(e) {
    // declare variables
    let key = e.keyCode;
    let inputValue = input.value;

    if(key == '13') {
        if(inputValue !== '') {
            
            console.log(inputValue);
            input.value = '';
            data.incompleteArray.push(inputValue);
            console.log(data.incompleteArray);

            incompleteTaskList.innerHTML = '';  // no duplicate entry

            createDOM(data.incompleteArray);
        }
    }
}

input.addEventListener('keypress', inputTask);

