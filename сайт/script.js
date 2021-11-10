const modalWrapper = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.modal-close');

const btnOn = document.querySelector('#btn_in');
const btnOut = document.querySelector('#btn_out');

const userName = document.getElementById('login');
const userPass = document.getElementById('password');

const btnLog = document.getElementById('btn_input')
const userNameSpan = document.getElementById('user-name');// спан логин

const author = document.getElementById('author');
const error = document.getElementById('error');

const login = (user) => {
    btnOn.style.display = 'none';

    btnOut.style.display = 'flex';
    userNameSpan.style.display = 'flex';
    userNameSpan.textContent = user.login;

    modalWrapper.style.display = 'none';
};

const logout = () => {
    btnOn.style.display = 'flex';

    btnOut.style.display = 'none';
    userNameSpan.style.display = 'flex';
    userNameSpan.textContent = '';

    localStorage.removeItem('user');
};

btnOut.addEventListener('click', logout);

btnOn.addEventListener('click', () => {
    modalWrapper.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
});

modalWrapper.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        modalWrapper.style.display = 'none';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') { modalWrapper.style.display = 'none'; }
});

author.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userNameSpan.value);

    valid();   
});

function valid() {
    if ((userName.value.trim().length > 0) && (userPass.value.trim().length > 0)) {
        const user = {
            login: userName.value,
            password: userPass.value
        };

        localStorage.setItem('user', JSON.stringify(user))
        login(user)
    }

    else {
        error.textContent = "Вы не заполнили поля!";
    }
}

if (localStorage.getItem('user') !== null) {
    login(JSON.parse(localStorage.getItem('user')))
}


// window.addEventListener('DOMContentLoaded', function(){
// let usNa = document.querySelector('#login');
// btnLog.addEventListener('click', function() {
// localStorage.setItem("login", userName.value);
// })
// })

// document.querySelectorAll('#btn_in').forEach(btn => {
//     btn.addEventListener('click', showInfo)
// });

// document.querySelectorAll('#btn_out').forEach(btn => {
//     btn.addEventListener('click', deleteCard);
// });

// btnClose.addEventListener('click', closeModal);

// modalWrapper.addEventListener('click', (e) => {
//     if (e.target === e.currentTarget) {
//         closeModal();
//     }
// });

// function showInfo(e) {
//     modalWrapper.classList.remove('hide');
//     showCard(cards, e);
// }

// function closeModal() {
//     modalWrapper.classList.add('hide');
// }

// function deleteCard(e) {
//     e.target.closest('article.card').remove();
// }

// document.addEventListener('keydown', e => {
//     if (e.code === 'Escape') {
//         closeModal();
//     }
// });

// const input = document.getElementById('text');
// const btn = document.getElementById('btn')

// let student = {
//     studentName: 'Mike',
//     age: 18
// }

// localStorage.setItem('student', JSON.stringify(student));
// let obj = JSON.parse(localStorage.getItem('student'));

// console.log(obj.studentName);
// console.log(obj);


// btn.addEventListener('click', showInfo);

// function showInfo(){
//     if(input.value == localStorage.getItem('userName')){
//         alert('молодец');
//     }
//     console.log(localStorage.getItem('userName'));
// }