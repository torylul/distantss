let x = 0;
let y = 0;
let dragItem = '';

document.body.addEventListener('dragstart', moveStart);
document.body.addEventListener('dragover', moveDragOver);
document.body.addEventListener('drop', moveDrop);


function moveStart(e) {
    dragItem = e.target;
    x = e.offsetX;
    y = e.offsetY;

    dragItem.style.zIndex = 10;
}

function moveDragOver(e) {
    e.preventDefault();
}

function moveDrop(e) {
    e.preventDefault();
    dragItem.style.left = (e.pageX - x) + 'px';
    dragItem.style.top = (e.pageY - y) + 'px';
    dragItem.style.zIndex = 10 + 1;
}