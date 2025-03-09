//Initial Commit

//Task 2
function createSupportTicket(name,description,level){
    const ticket = document.createElement('div');
    ticket.setAttribute('class','ticketCard');

    const ticketName = document.createElement('h3');
    ticketName.innerHTML = name;
    ticket.appendChild(ticketName);

    const ticketLevel = document.createElement('h4');
    ticketLevel.innerHTML = level;
    ticket.appendChild(ticketLevel);

    const ticketDescription = document.createElement('p'); 
    ticketDescription.innerHTML = description;
    ticket.appendChild(ticketDescription);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click',function(event){
        event.stopPropagation();
            ticket.remove();
        });
    ticket.appendChild(removeButton);

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticket);
}