//Initial Commit

//Task 2
function createSupportTicket(name,description){
    const ticket = document.createElement('div');
    ticket.setAttribute('class','ticketCard');

    const ticketName = document.createElement('h3');
    ticketName.innerHTML = name;
    ticket.appendChild(ticketName);

    const ticketLevel = document.createElement('select');
    ticketLevel.setAttribute('class','levelDropdown');
    const levels = ['Low', 'Medium', 'High','None'];
    levels.forEach(lvl => {
        const option = document.createElement('option');
        option.value = lvl;
        option.text = lvl;
        if (lvl === lvl) {
            option.selected = true;
        }
        ticketLevel.appendChild(option);
    });
    ticket.appendChild(ticketLevel);

    const ticketDescription = document.createElement('p'); 
    ticketDescription.innerHTML = description;
    ticket.appendChild(ticketDescription);

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click',function(event){
        event.stopPropagation();
            ticket.remove();
        });
    ticket.appendChild(resolveButton);

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}

//Task 3

function highlightPriorityTickets () {
    const Tickets = document.querySelectorAll('.ticketCard');
    const ticketsArray = Array.from(Tickets);
    ticketsArray.forEach(ticket => {
        const level = ticket.getElementsByTagName('select')[0].value;
        if(level === 'High'){
            ticket.style.backgroundColor = 'red';
        }else if(level === 'Medium'){
            ticket.style.backgroundColor = 'yellow';
        }else if(level === 'Low'){
            ticket.style.backgroundColor = 'green';
        } });}

function removeHighlight(){
    const Tickets = document.getElementsByClassName('ticketCard');
    const ticketsArray = Array.from(Tickets);
    ticketsArray.forEach(ticket => {
        ticket.style.backgroundColor = 'lightgrey';
    });
}

//Task 4
const ticketContainer = document.getElementById('ticketContainer');
ticketContainer.addEventListener('click',function(){
    console.log('Ticket container clicked');
});
