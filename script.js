const btn = document.getElementById('addTask')
const input = document.getElementById('taskInput')
let ul = document.getElementById('taskList')

let eachItemArr = [];
console.log(eachItemArr)
btn.addEventListener('click',function() {
    let value = input.value
    

    if(value){
    //creates each List
    let li = document.createElement('li')
    li.setAttribute('id',value)
    li.appendChild(document.createTextNode(value))
    ul.appendChild(li)
    input.value = ''
    
    //push each item to eachItemArr

     eachItemArr.push(value)

     console.log(eachItemArr)

    let clickDeleteButton = document.createElement('button')
        clickDeleteButton.setAttribute('class', 'delete-button')
        clickDeleteButton.setAttribute('id', value)
        clickDeleteButton.innerText = 'Delete'
        console.log(clickDeleteButton)
    //append button to each list

    li.appendChild(clickDeleteButton);
    
    //add delete button to each list

    clickDeleteButton.addEventListener('click',function () {
        li.remove(li)
        //remove the li value from eachItemArr
        eachItemArr.forEach((item,index) => {
            if(item === value){
                eachItemArr.splice(index,1)
            }
        })
    })
    
    }else if(value === ""){
        alert('please enter a task')
    }  

})

//when clicking enter

input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        let value = input.value; 

        if (value) {
            // Create a new list item
            let li = document.createElement('li');
            li.setAttribute('id',value)
            li.appendChild(document.createTextNode(value));

            // Append the list item to the task list
            ul.appendChild(li);
            console.log(li)
            // Clear the input field
            input.value = ''
        // pushes item to arr
            eachItemArr.push(value)

         console.log(eachItemArr)

        //add delete button to each list
        let enterDeleteButton = document.createElement('button');
            enterDeleteButton.setAttribute('class', 'delete-button');
            enterDeleteButton.setAttribute('id',value)
            enterDeleteButton.innerText = 'Delete'
            console.log(enterDeleteButton)
        //append button
        li.appendChild(enterDeleteButton)

        /*finish later*/
        //delete li value from Arr
        eachItemArr.forEach((item,index) => {
            if(item=== value){
                eachItemArr.slice(index,1)
            }
        })


    
        } else {
            alert('Please enter a task');
        }
    }
});






//save to local storage





