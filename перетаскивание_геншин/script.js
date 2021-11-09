let persBoxes = document.querySelectorAll('.genshin');
let imgPers = document.querySelectorAll('.pers-img');
let boxes = document.querySelectorAll('.zona');
let textRes = document.querySelector('.text_container');

let count = boxes.length;

let dragItem = null;
let dragSource = null;

imgPers.forEach(box => {
    box.addEventListener('dragstart', dragStart);
    box.addEventListener('dragend', dragEnd);
});

[...persBoxes, ...boxes].forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
})

function dragStart(e) {
    dragItem = e.target;
    dragSource = e.target.closest('.zona');
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0)
}

function dragEnd(e) {
    e.target.style.display = '';
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') {
        e.target.append(dragItem);
        if (dragItem.dataset.role == 'male') {

            changingTheVisual(dragSource, e.target.closest('.zona'), 'zona-right')

            if (getCount() === count) {
                textRes.textContent = "Вы нашли всех персонажей!";
                textRes.classList.add('res');
            }
            else {
                textRes.textContent = "Не все персонажи найдены.";
                if (textRes.classList.contains('res'));
                    textRes.classList.remove('res');
            }
        }
    }
}

function getCount() {
    return document.querySelectorAll('.zona>img[data-role="male"]').length;
}

function changingTheVisual(elemSource, elemRes, classRes) {
    if (elemRes != null) {
        elemRes.classList.add(classRes);
    }
    if (elemSource != null) {
        dragSource.classList.remove(classRes);
    }
}

// const persImg = document.querySelectorAll('.pers-img');
// const persZones = document.querySelectorAll('.genshin');
// const zones = document.querySelectorAll('.zona');
// const textCont = document.querySelectorAll('.text_container');

// let count = zones.length;

// let dragItem = null;
// let dragSource = null;

// persImg.forEach(zonas => {
//     zonas.addEventListener('dragstart', dragStart);
//     zonas.addEventListener('dragend', dragEnd);
// });

// [...persZones, ...zones].forEach(zonas => {
//     zonas.addEventListener('dragover', dragOver);
//     zonas.addEventListener('drop', drop);
// });

// function dragStart(e) {
//     dragItem = e.target;
//     dragSource = e.target.closest('.zona');
//     setTimeout(() => {
//         e.target.style.display = 'none'
//     }, 0)
// }

// function dragEnd(e) {
//     e.target.style.display = ' ';
// }

// function dragOver(e) {
//     e.preventDefault();
// }

// function drop(e) {
//     e.preventDefault();
//     if (e.target.tagName !== 'IMG') {
//         e.target.append(dragItem)
//         if (dragItem.dataset.role == 'male') {
//             visualRes(dragSource, e.target.closest('.zona'), 'zona-right')

//             if (countRes() === count) {
//                 textCont.textContent = "Вы нашли всех персонажей!"
//                 textCont.classList.add('res')
//             }
//             else {
//                 textCont.textContent = "Не все персонажи найдены."
//                 if (textCont.classList.contains('res')) text.classList.remove('res')
//             }
//         }
//     }
// }

// function countRes() {
//     return document.querySelectorAll('.zona>img[data-role="male"]').length
// }

// function visualRes(elSou, elRes, classRes) {
// if (elRes != null) elRes.classList.add(classRes);
// if (elSou != null) dragSource.classList.remove(classRes)
// }