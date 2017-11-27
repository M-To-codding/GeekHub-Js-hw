var allDraggableItems = document.querySelector('[draggable-item]');
//     droppableField = document.querySelector('[droppable-field]');
//
//
// function dragStart(e){
//     event.dataTransfer.dropEffect = 'move';
// }
//     document.onmousedown = dragStart;


function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("Text", e.target.getAttribute('id'));

    return true;
}

function dragEnter(e) {
    e.preventDefault();
    return false;
}

function dragOver(e) {
    e.preventDefault();
    return false;
}

function dragDrop(e) {
    var element = e.dataTransfer.getData("Text");

    document.querySelector('[droppable-field]').appendChild(document.getElementById(element));
    console.log(e.dataTransfer.getData("Text"));

    e.stopPropagation();
    return false;
}


document.ondragstart = dragStart;
document.ondragenter = dragEnter;
document.ondrop = dragDrop;
document.ondragover = dragOver;