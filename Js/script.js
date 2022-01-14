const ADD = document.querySelector('header button');
const UL = document.querySelector('main ul');
const GET_SPAN = document.querySelector('main ul span');



ADD.addEventListener('click', add);

function add() {
    const LIST = document.createElement('li');
    const P = document.createElement('p');
    const SPAN = document.createElement('span');
    const TRASH = document.createAttribute('id');
    const TASK = document.querySelector('header input').value;
    
    TRASH.value = 'trash';

    LIST.appendChild(P);
    SPAN.setAttributeNode(TRASH);
    UL.appendChild(LIST);
    LIST.appendChild(SPAN);
    P.innerHTML = TASK;
    SPAN.innerHTML = '&#128465';
    

    SPAN.addEventListener('click', del);

    function del() {
        LIST.style.display = 'none';
    }
}
