//Initial Commit

//Task 2
function createSupportTicket(name,description){ //Function to create a ticket
    const ticket = document.createElement('div'); //Creating a div element
    ticket.setAttribute('class','ticketCard'); //Sets the class attribute of the div element to 'ticketCard'

    const ticketName = document.createElement('h3'); //Creates a h3 element
    ticketName.innerHTML = name; //Sets the innerHTML of the h3 element to the name parameter
    ticket.appendChild(ticketName); //Appends the h3 element to the div element

    const ticketLevel = document.createElement('select'); //Creates a select element
    ticketLevel.setAttribute('class','levelDropdown'); //Sets the class attribute of the select element to 'levelDropdown'
    const levels = ['Low', 'Medium', 'High','None']; //Array of ticket levels
    levels.forEach(lvl => { //Iterates through the levels array
        const option = document.createElement('option'); //Creates an option element
        option.value = lvl; //Sets the value attribute of the option element to the current level
        option.text = lvl; //Sets the text of the option element to the current level
        if (lvl === lvl) { //If the current level is equal to the level parameter
            option.selected = true; //The option element is selected
        }
        ticketLevel.appendChild(option);//Appends the option element to the select element
    });
    ticket.appendChild(ticketLevel); //Appends the select element to the div element

    const ticketDescription = document.createElement('p'); //Creates a p element
    ticketDescription.innerHTML = description; //Sets the innerHTML of the p element to the description parameter
    ticket.appendChild(ticketDescription); //Appends the p element to the div element

    const resolveButton = document.createElement('button'); //Creates a button element
    resolveButton.textContent = 'Resolve'; //Sets the text content of the button element to 'Resolve'
    resolveButton.addEventListener('click',function(event){ //Adds an event listener to the button element
        event.stopPropagation(); //Prevents the event from bubbling up the DOM tree
            ticket.remove(); //Removes the div element from the DOM
        });
    ticket.appendChild(resolveButton); //Appends the button element to the div element

    const ticketContainer = document.getElementById('ticketContainer'); //Gets the div element with the id 'ticketContainer'
    ticketContainer.appendChild(ticket); //Appends the div element to the ticketContainer div element
}

//Task 3

function highlightPriorityTickets () { //Function to highlight tickets based on their priority level
    const Tickets = document.querySelectorAll('.ticketCard'); //Selects all elements with the class 'ticketCard'
    const ticketsArray = Array.from(Tickets); //Converts the NodeList to an array
    ticketsArray.forEach(ticket => { //Iterates through the array
        const level = ticket.getElementsByTagName('select')[0].value; //Gets the value of the select element
        if(level === 'High'){ //If the level is 'High'
            ticket.style.backgroundColor = 'red'; //Sets the background color of the div element to red
        }else if(level === 'Medium'){
            ticket.style.backgroundColor = 'yellow';
        }else if(level === 'Low'){
            ticket.style.backgroundColor = 'green';
        } });}

function removeHighlight(){ //Function to remove the highlight from all tickets
    const Tickets = document.getElementsByClassName('ticketCard'); //Selects all elements with the class 'ticketCard'
    const ticketsArray = Array.from(Tickets); //Converts to an array
    ticketsArray.forEach(ticket => {    //Iterates through the array
        ticket.style.backgroundColor = 'lightgrey'; //Sets the background color of the div element to lightgrey
    });
}

//Task 4
const ticketContainer = document.getElementById('ticketContainer'); //Gets the div element with the id 'ticketContainer'
ticketContainer.addEventListener('click',function(){ //Adds an event listener to the ticketContainer div element
    console.log('Ticket container clicked'); //Logs 'Ticket container clicked' to the console
});

//Task 5
ticketContainer.addEventListener('dblclick', function(event) { //Adds an event listener to the ticketContainer div element
    const ticket = event.target.closest('.ticketCard'); //Gets the closest ancestor of the clicked element with the class 'ticketCard'

    const nameElement = ticket.querySelector('h3'); //Selects the h3 element
    const descriptionElement = ticket.querySelector('p'); //Selects the p element
    const levelElement = ticket.querySelector('select'); //Selects the select element

    const nameInput = document.createElement('input'); //Creates an input element
    nameInput.value = nameElement.textContent; //Sets the value attribute of the input element to the text content of the h3 element

    const descriptionInput = document.createElement('input'); //Creates an input element
    descriptionInput.value = descriptionElement.textContent; //Sets the value attribute of the input element to the text content of the p element

    const saveButton = document.createElement('button'); //Creates a button element
    saveButton.textContent = 'Save'; //Sets the text content of the button element to 'Save'
    saveButton.addEventListener('click', function() { //Adds an event listener to the button element
        nameElement.textContent = nameInput.value; //Sets the text content of the h3 element to the value of the input element
        descriptionElement.textContent = descriptionInput.value; //Sets the text content of the p element to the value of the input element

        ticket.replaceChild(nameElement, nameInput); //Replaces the input element with the h3 element
        ticket.replaceChild(descriptionElement, descriptionInput); //Replaces the input element with the p element
        ticket.removeChild(saveButton); //Removes the button element
    });

    ticket.replaceChild(nameInput, nameElement); //Replaces the h3 element with the input element
    ticket.replaceChild(descriptionInput, descriptionElement); //Replaces the p element with the input element
    ticket.appendChild(saveButton); //Appends the button element to the div element
});
