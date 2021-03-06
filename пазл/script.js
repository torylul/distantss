const zonesImg = document.querySelectorAll('.container-block');
const zones = document.querySelectorAll('.block1');
const img = document.querySelectorAll('.img');
const h1 = document.querySelector('h1');

let dragItem = null;

let count = zones.length;

img.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

[...zonesImg, ...zones].forEach(zona => {
    zona.addEventListener('dragover', dragOver);
    zona.addEventListener('drop', drop);
});

zones.forEach(zona => {
    zona.addEventListener('dragenter', dragEnter);
    zona.addEventListener('dragleave', dragLeave);
});

function dragStart(e) {
    dragItem = e.target;
    e.target.style.opacity = "0.01";
    e.dataTransfer.setData('id', e.target.dataset.target)
}

function dragEnd(e) {
    e.target.style.opacity = "1";
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drop-zone');
}
function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('drop-zone');
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove('drop-zone');

    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
        if (getCount() === count) {
            if (e.target.id === e.dataTransfer.getData('id')) {
                h1.textContent = "Вы расставили всё по местам!";
            }
        }
        else {
            h1.textContent = "Соберите пазл";
        }
    }

}

function getCount() {
    return document.querySelectorAll('.block1>img').length;
}