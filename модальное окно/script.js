
let cards = [
    {
        id: "1",
        head: "Ким Тэхен",
        body: "Южнокорейский певец, композитор, автор песен, продюсер и актёр компании BigHit Music. Он является участником мужской группы BTS.",
        image: "https://i.pinimg.com/564x/72/f9/7a/72f97a36236861e80c42ba4ac3fc3889.jpg",
    },
    {
        id: "2",
        head: "Чон Чонгук",
        body: "Южнокорейский певец, танцор, автор песен и продюсер компании BigHit Music. Он является младшим участником мужской группы BTS.",
        image: "https://i.pinimg.com/564x/c9/35/d6/c935d62c42797c65fc4cd5a4f9da4db3.jpg",
    },
    {
        id: "3",
        head: "Пак Чимин",
        body: "Южнокорейский певец, танцор и автор песен компании BigHit Music. Он является участником мужской группы BTS.",
        image: "https://i.pinimg.com/564x/94/71/48/947148fe68641fc71abe571960a31ef3.jpg",
    },
]

let cardsCount = document.querySelector('.cards');

createManyCards(cards, cardsCount);

function createManyCards(array, cont) {
    array.forEach(item => {
        cont.insertAdjacentHTML('beforeend', createCard(item));
    });
}

function createCard({ id, image, head, body }) {
    return `
<article class = "card" id = "${id}">
<img src = "${image}" alt = "head">
<h2>${head}<h2>
<p>${cropText(body)}</p>
<div class = "bnts">
<button class = "btn-delete">Удалить</button>
<button class = "btn-info">Подробнее</button>
</div>
</article">
`;
}

function cropText(text, length = 20) {
    return text.substr(0, length) + '...';
}

const modalWrapper = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.modal-close');

document.querySelectorAll('.btn-info').forEach(btn => {
    btn.addEventListener('click', showInfo)
});

document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', deleteCard);
});

btnClose.addEventListener('click', closeModal);

modalWrapper.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

function showInfo(e) {
    modalWrapper.classList.remove('hide');
    showCard(cards, e);
}

function closeModal() {
    modalWrapper.classList.add('hide');
}

function deleteCard(e) {
    e.target.closest('article.card').remove();
}

document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
        closeModal();
    }
});

function showCard(array, e) {
    let { image, head, body } = array.find(item => item.id === e.target.closest('article.card').id);
    document.querySelector('.card-modal-left > img').src = image;
    document.querySelector('.card-modal-right > h3').textContent = head;
    document.querySelector('.card-modal-right > p').textContent = body;
}

localStorage.setItem("obj", JSON.stringify(cards));
cards = JSON.parse(localStorage.getItem("obj"));
localStorage.getItem("obj", JSON.stringify(cards));
console.log(cards);